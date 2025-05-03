# routes/exercise_routes.py
from flask import Blueprint, request, jsonify
from extensions import db
from models.exercise import Exercicio

exercicio_bp = Blueprint('exercicio_bp', __name__)

# Criar um novo exercício (para administradores)
@exercicio_bp.route('/exercicios', methods=['POST'])
def criar_exercicio():
    dados = request.get_json()
    
    # Verificar se todos os campos obrigatórios estão presentes
    if not dados or not all(k in dados for k in ("nome", "musculo_primario")):
        return jsonify({"mensagem": "Dados inválidos: nome e musculo_primario são obrigatórios"}), 400
    
    # Verificar se já existe um exercício com este nome
    exercicio_existente = Exercicio.query.filter_by(nome=dados['nome']).first()
    if exercicio_existente:
        return jsonify({"mensagem": "Já existe um exercício com este nome"}), 400
    
    # Criar novo exercício
    novo_exercicio = Exercicio(
        nome=dados['nome'],
        musculo_primario=dados['musculo_primario'],
        musculo_secundario=dados.get('musculo_secundario'),
        descricao=dados.get('descricao')
    )
    
    db.session.add(novo_exercicio)
    db.session.commit()
    
    return jsonify({
        "mensagem": "Exercício criado com sucesso!",
        "exercicio": novo_exercicio.to_dict()
    }), 201

# Listar todos os exercícios
@exercicio_bp.route('/exercicios', methods=['GET'])
def listar_exercicios():
    # Parâmetros de consulta opcionais para filtrar por músculo
    musculo_primario = request.args.get('musculo_primario')
    musculo_secundario = request.args.get('musculo_secundario')
    nome = request.args.get('nome')
    
    # Iniciar a consulta básica
    query = Exercicio.query
    
    # Aplicar filtros se fornecidos
    if musculo_primario:
        query = query.filter(Exercicio.musculo_primario.ilike(f'%{musculo_primario}%'))
    
    if musculo_secundario:
        query = query.filter(Exercicio.musculo_secundario.ilike(f'%{musculo_secundario}%'))
    
    if nome:
        query = query.filter(Exercicio.nome.ilike(f'%{nome}%'))
    
    # Executar a consulta e obter resultados
    exercicios = query.order_by(Exercicio.nome).all()
    
    return jsonify([exercicio.to_dict() for exercicio in exercicios])

# Obter um exercício específico
@exercicio_bp.route('/exercicios/<int:id>', methods=['GET'])
def obter_exercicio(id):
    exercicio = Exercicio.query.get(id)
    if not exercicio:
        return jsonify({"mensagem": "Exercício não encontrado"}), 404
    
    return jsonify(exercicio.to_dict())

# Editar um exercício (para administradores)
@exercicio_bp.route('/exercicios/<int:id>', methods=['PUT'])
def editar_exercicio(id):
    exercicio = Exercicio.query.get(id)
    if not exercicio:
        return jsonify({"mensagem": "Exercício não encontrado"}), 404
    
    dados = request.get_json()
    
    # Atualizar campos se fornecidos
    if 'nome' in dados:
        # Verificar se o novo nome já existe em outro exercício
        if dados['nome'] != exercicio.nome:
            nome_existente = Exercicio.query.filter_by(nome=dados['nome']).first()
            if nome_existente:
                return jsonify({"mensagem": "Já existe um exercício com este nome"}), 400
        exercicio.nome = dados['nome']
    
    if 'musculo_primario' in dados:
        exercicio.musculo_primario = dados['musculo_primario']
    
    if 'musculo_secundario' in dados:
        exercicio.musculo_secundario = dados['musculo_secundario']
    
    if 'descricao' in dados:
        exercicio.descricao = dados['descricao']
    
    db.session.commit()
    
    return jsonify({
        "mensagem": "Exercício atualizado com sucesso!",
        "exercicio": exercicio.to_dict()
    })

# Excluir um exercício (para administradores)
@exercicio_bp.route('/exercicios/<int:id>', methods=['DELETE'])
def remover_exercicio(id):
    exercicio = Exercicio.query.get(id)
    if not exercicio:
        return jsonify({"mensagem": "Exercício não encontrado"}), 404
    
    # Verificar se o exercício está sendo usado em alguma sessão de treino
    if exercicio.sessoes:
        return jsonify({"mensagem": "Este exercício está sendo usado em sessões de treino e não pode ser removido"}), 400
    
    db.session.delete(exercicio)
    db.session.commit()
    
    return jsonify({"mensagem": "Exercício removido com sucesso!"})

# Buscar exercícios por texto
@exercicio_bp.route('/exercicios/buscar', methods=['GET'])
def buscar_exercicios():
    texto = request.args.get('q', '')
    if not texto or len(texto) < 2:
        return jsonify({"mensagem": "Forneça pelo menos 2 caracteres para busca"}), 400
    
    # Buscar por nome, músculo primário ou secundário
    exercicios = Exercicio.query.filter(
        db.or_(
            Exercicio.nome.ilike(f'%{texto}%'),
            Exercicio.musculo_primario.ilike(f'%{texto}%'),
            Exercicio.musculo_secundario.ilike(f'%{texto}%')
        )
    ).order_by(Exercicio.nome).all()
    
    return jsonify([exercicio.to_dict() for exercicio in exercicios])