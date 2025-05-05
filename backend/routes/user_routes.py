# routes/user_routes.py
from flask import Blueprint, request, jsonify
from extensions import db
from models.user import Usuario
from datetime import datetime
from passlib.hash import pbkdf2_sha256

usuario_bp = Blueprint('usuario_bp', __name__)

# Criar um usuário
@usuario_bp.route('/usuarios', methods=['POST'])
def criar_usuario():
    dados = request.get_json()
    # Verificar se todos os campos obrigatórios estão presentes
    if not dados or not all(k in dados for k in ("nome", "email", "senha", "data_nascimento")):
        return jsonify({"mensagem": "Dados inválidos: nome, email, senha e data de nascimento são obrigatórios"}), 400
    
    # Verificar se o email já existe
    usuario_existente = Usuario.query.filter_by(email=dados['email']).first()
    if usuario_existente:
        return jsonify({"mensagem": "Email já está em uso"}), 400
    
    # Processar data de nascimento
    data_nascimento = None
    if dados['data_nascimento']:
        try:
            data_nascimento = datetime.strptime(dados['data_nascimento'], '%d/%m/%Y').date()
        except ValueError:
            try:
                # Tentar formato alternativo se o primeiro falhar
                data_nascimento = datetime.strptime(dados['data_nascimento'], '%Y-%m-%d').date()
            except ValueError:
                return jsonify({"mensagem": "Formato de data inválido. Use DD/MM/YYYY ou YYYY-MM-DD"}), 400
    
    # Gerar hash da senha
    senha_hash = Usuario.hash_senha(dados['senha'])
    
    novo_usuario = Usuario(
        nome=dados['nome'],
        email=dados['email'],
        senha=senha_hash,
        data_nascimento=data_nascimento,
        telefone=dados.get('telefone'),
        altura=dados.get('altura'),
        peso=dados.get('peso')
    )
    
    db.session.add(novo_usuario)
    db.session.commit()
    
    return jsonify({
        "mensagem": "Usuário criado com sucesso!",
        "usuario": novo_usuario.to_dict()
    }), 201

# Listar usuários
@usuario_bp.route('/usuarios', methods=['GET'])
def listar_usuarios():
    usuarios = Usuario.query.all()
    return jsonify([usuario.to_dict() for usuario in usuarios])

# Obter um usuário específico
@usuario_bp.route('/usuarios/<int:id>', methods=['GET'])
def obter_usuario(id):
    usuario = Usuario.query.get(id)
    if not usuario:
        return jsonify({"mensagem": "Usuário não encontrado"}), 404
    return jsonify(usuario.to_dict())

# Editar um usuário
@usuario_bp.route('/usuarios/<int:id>', methods=['PUT'])
def editar_usuario(id):
    usuario = Usuario.query.get(id)
    if not usuario:
        return jsonify({"mensagem": "Usuário não encontrado"}), 404
    
    dados = request.get_json()
    
    if 'nome' in dados:
        usuario.nome = dados['nome']
    
    if 'email' in dados and dados['email'] != usuario.email:
        # Verificar se o novo email já está em uso
        email_existente = Usuario.query.filter_by(email=dados['email']).first()
        if email_existente and email_existente.id != usuario.id:
            return jsonify({"mensagem": "Email já está em uso"}), 400
        usuario.email = dados['email']
    
    # Processar data de nascimento se fornecida
    if 'data_nascimento' in dados and dados['data_nascimento']:
        try:
            # Tenta primeiro formato DD/MM/YYYY (como mostrado na interface)
            usuario.data_nascimento = datetime.strptime(dados['data_nascimento'], '%d/%m/%Y').date()
        except ValueError:
            try:
                # Tenta formato alternativo YYYY-MM-DD
                usuario.data_nascimento = datetime.strptime(dados['data_nascimento'], '%Y-%m-%d').date()
            except ValueError:
                return jsonify({"mensagem": "Formato de data inválido. Use DD/MM/YYYY ou YYYY-MM-DD"}), 400
    
    # Processar campos adicionais
    if 'telefone' in dados:
        usuario.telefone = dados['telefone']
    
    if 'altura' in dados:
        # Verificar se o valor é numérico
        try:
            if isinstance(dados['altura'], str) and dados['altura'].endswith('m'):
                # Se for uma string terminando com 'm', converter para float
                altura_str = dados['altura'].rstrip('m')
                usuario.altura = float(altura_str) * 100  # converter de metros para cm
            else:
                usuario.altura = float(dados['altura'])
        except (ValueError, TypeError):
            return jsonify({"mensagem": "Altura deve ser um valor numérico"}), 400
    
    if 'peso' in dados:
        # Verificar se o valor é numérico
        try:
            if isinstance(dados['peso'], str) and dados['peso'].endswith('kg'):
                # Se for uma string terminando com 'kg', converter para float
                peso_str = dados['peso'].rstrip('kg')
                usuario.peso = float(peso_str)
            else:
                usuario.peso = float(dados['peso'])
        except (ValueError, TypeError):
            return jsonify({"mensagem": "Peso deve ser um valor numérico"}), 400
    
    db.session.commit()
    
    return jsonify({
        "mensagem": "Usuário atualizado com sucesso!",
        "usuario": usuario.to_dict()
    })

# Deletar um usuário
@usuario_bp.route('/usuarios/<int:id>', methods=['DELETE'])
def remover_usuario(id):
    usuario = Usuario.query.get(id)
    if not usuario:
        return jsonify({"mensagem": "Usuário não encontrado"}), 404
    
    try:
        # Primeiramente, remover manualmente quaisquer timers ativos
        from models.session_timer import TimerSessao
        timers_ativos = TimerSessao.query.filter_by(usuario_id=id, ativo=True).all()
        
        for timer in timers_ativos:
            # Finaliza o timer antes de excluir
            timer.finalizar()
            db.session.delete(timer)
        
        # Agora podemos remover o usuário de forma segura
        db.session.delete(usuario)
        db.session.commit()
        
        return jsonify({"mensagem": "Usuário removido com sucesso!"})
    
    except Exception as e:
        db.session.rollback()
        # Log do erro
        import logging
        logging.error(f"Erro ao excluir usuário {id}: {str(e)}")
        
        return jsonify({
            "mensagem": "Erro ao remover usuário. Contate o suporte.",
            "erro": str(e)
        }), 500
# Atualizar dados biométricos
@usuario_bp.route('/usuarios/<int:id>/biometria', methods=['PATCH'])
def atualizar_biometria(id):
    usuario = Usuario.query.get(id)
    if not usuario:
        return jsonify({"mensagem": "Usuário não encontrado"}), 404
    
    dados = request.get_json()
    
    if 'altura' in dados:
        try:
            if isinstance(dados['altura'], str) and dados['altura'].endswith('m'):
                # Se for uma string terminando com 'm', converter para float
                altura_str = dados['altura'].rstrip('m')
                usuario.altura = float(altura_str) * 100  # converter de metros para cm
            else:
                usuario.altura = float(dados['altura'])
        except (ValueError, TypeError):
            return jsonify({"mensagem": "Altura deve ser um valor numérico"}), 400
    
    if 'peso' in dados:
        try:
            if isinstance(dados['peso'], str) and dados['peso'].endswith('kg'):
                # Se for uma string terminando com 'kg', converter para float
                peso_str = dados['peso'].rstrip('kg')
                usuario.peso = float(peso_str)
            else:
                usuario.peso = float(dados['peso'])
        except (ValueError, TypeError):
            return jsonify({"mensagem": "Peso deve ser um valor numérico"}), 400
    
    db.session.commit()
    
    return jsonify({
        "mensagem": "Dados biométricos atualizados com sucesso!",
        "usuario": usuario.to_dict()
    })

# Rota de login
@usuario_bp.route('/login', methods=['POST'])
def login():
    dados = request.get_json()
    
    if not dados or not all(k in dados for k in ('email', 'senha')):
        return jsonify({"mensagem": "Email e senha são obrigatórios"}), 400
    
    usuario = Usuario.query.filter_by(email=dados['email']).first()
    
    if not usuario or not pbkdf2_sha256.verify(dados['senha'], usuario.senha):
        return jsonify({"mensagem": "Email ou senha inválidos"}), 401
    
    return jsonify({
        "mensagem": "Login realizado com sucesso",
        "usuario": usuario.to_dict()
    })

# Verificar disponibilidade de email
@usuario_bp.route('/verificar-email', methods=['POST'])
def verificar_email():
    dados = request.get_json()
    
    if not dados or 'email' not in dados:
        return jsonify({"mensagem": "Email é obrigatório"}), 400
    
    usuario_existente = Usuario.query.filter_by(email=dados['email']).first()
    
    if usuario_existente:
        return jsonify({"disponivel": False, "mensagem": "Este email já está em uso"})
    else:
        return jsonify({"disponivel": True, "mensagem": "Email disponível para cadastro"})

# Alterar senha
@usuario_bp.route('/usuarios/<int:id>/alterar-senha', methods=['POST'])
def alterar_senha(id):
    usuario = Usuario.query.get(id)
    if not usuario:
        return jsonify({"mensagem": "Usuário não encontrado"}), 404
    
    dados = request.get_json()
    
    # Verificar se todos os campos necessários estão presentes
    if not dados or not all(k in dados for k in ('senha_atual', 'nova_senha')):
        return jsonify({"mensagem": "Senha atual e nova senha são obrigatórios"}), 400
    
    # Verificar se a senha atual está correta
    if not pbkdf2_sha256.verify(dados['senha_atual'], usuario.senha):
        return jsonify({"mensagem": "Senha atual incorreta"}), 401
    
    # Atualizar a senha
    usuario.senha = pbkdf2_sha256.hash(dados['nova_senha'])
    db.session.commit()
    
    return jsonify({"mensagem": "Senha alterada com sucesso"})