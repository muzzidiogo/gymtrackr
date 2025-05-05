# routes/session_routes.py
from flask import Blueprint, request, jsonify
from extensions import db
from models.session import SessaoTreino
from models.exercise import Exercicio
from models.session_exercise import ExercicioSessao
from models.user import Usuario
from datetime import datetime
from functools import wraps

sessao_bp = Blueprint('sessao_bp', __name__)

# Decorator para verificar se o usuário tem acesso à sessão
def verificar_propriedade_sessao(f):
    @wraps(f)
    def decorated_function(usuario_id, sessao_id, *args, **kwargs):
        # Verificar se o usuário existe
        usuario = Usuario.query.get(usuario_id)
        if not usuario:
            return jsonify({"mensagem": "Usuário não encontrado"}), 404
        
        # Verificar se a sessão existe
        sessao = SessaoTreino.query.get(sessao_id)
        if not sessao:
            return jsonify({"mensagem": "Sessão de treino não encontrada"}), 404
        
        # Verificar se a sessão pertence ao usuário
        if sessao.usuario_id != usuario_id:
            return jsonify({"mensagem": "Acesso negado: esta sessão não pertence a este usuário"}), 403
        
        return f(usuario_id, sessao_id, *args, **kwargs)
    return decorated_function

# Criar uma nova sessão de treino
@sessao_bp.route('/usuarios/<int:usuario_id>/sessoes', methods=['POST'])
def criar_sessao(usuario_id):
    dados = request.get_json()
    
    # Verificar se o usuário existe
    usuario = Usuario.query.get(usuario_id)
    if not usuario:
        return jsonify({"mensagem": "Usuário não encontrado"}), 404
    
    # Verificar se o nome da sessão foi fornecido
    if not dados or 'nome' not in dados:
        return jsonify({"mensagem": "Dados inválidos: nome é obrigatório"}), 400
    
    # Criar nova sessão de treino
    nova_sessao = SessaoTreino(
        nome=dados['nome'],
        usuario_id=usuario_id
    )
    
    db.session.add(nova_sessao)
    db.session.commit()
    
    return jsonify({
        "mensagem": "Sessão de treino criada com sucesso!",
        "sessao": nova_sessao.to_dict()
    }), 201

# Listar todas as sessões de treino de um usuário
@sessao_bp.route('/usuarios/<int:usuario_id>/sessoes', methods=['GET'])
def listar_sessoes(usuario_id):
    # Verificar se o usuário existe
    usuario = Usuario.query.get(usuario_id)
    if not usuario:
        return jsonify({"mensagem": "Usuário não encontrado"}), 404
    
    sessoes = SessaoTreino.query.filter_by(usuario_id=usuario_id).all()
    
    return jsonify([sessao.to_dict() for sessao in sessoes])

# Obter uma sessão de treino específica
@sessao_bp.route('/usuarios/<int:usuario_id>/sessoes/<int:sessao_id>', methods=['GET'])
@verificar_propriedade_sessao
def obter_sessao(usuario_id, sessao_id):
    sessao = SessaoTreino.query.get(sessao_id)
    return jsonify(sessao.to_dict())

# Atualizar uma sessão de treino
@sessao_bp.route('/usuarios/<int:usuario_id>/sessoes/<int:sessao_id>', methods=['PUT'])
@verificar_propriedade_sessao
def editar_sessao(usuario_id, sessao_id):
    sessao = SessaoTreino.query.get(sessao_id)
    dados = request.get_json()
    
    # Atualizar nome da sessão se fornecido
    if 'nome' in dados:
        sessao.nome = dados['nome']
    
    sessao.ultima_atualizacao = datetime.utcnow()
    db.session.commit()
    
    return jsonify({
        "mensagem": "Sessão de treino atualizada com sucesso!",
        "sessao": sessao.to_dict()
    })

# Excluir uma sessão de treino
@sessao_bp.route('/usuarios/<int:usuario_id>/sessoes/<int:sessao_id>', methods=['DELETE'])
@verificar_propriedade_sessao
def remover_sessao(usuario_id, sessao_id):
    sessao = SessaoTreino.query.get(sessao_id)
    
    db.session.delete(sessao)
    db.session.commit()
    
    return jsonify({"mensagem": "Sessão de treino removida com sucesso!"})

# Adicionar exercício a uma sessão de treino
@sessao_bp.route('/usuarios/<int:usuario_id>/sessoes/<int:sessao_id>/exercicios', methods=['POST'])
@verificar_propriedade_sessao
def adicionar_exercicio(usuario_id, sessao_id):
    sessao = SessaoTreino.query.get(sessao_id)
    dados = request.get_json()
    
    # Verificar se todos os campos obrigatórios estão presentes
    if not dados or not all(k in dados for k in ("exercicio_id",)):
        return jsonify({"mensagem": "Dados inválidos: exercicio_id é obrigatório"}), 400
    
    # Verificar se o exercício existe
    exercicio = Exercicio.query.get(dados['exercicio_id'])
    if not exercicio:
        return jsonify({"mensagem": "Exercício não encontrado"}), 404
    
    # Determinar a próxima ordem para o exercício na sessão
    ultimo_exercicio = ExercicioSessao.query.filter_by(sessao_id=sessao_id).order_by(ExercicioSessao.ordem.desc()).first()
    proxima_ordem = (ultimo_exercicio.ordem + 1) if ultimo_exercicio else 1
    
    # Criar relação exercício-sessão
    exercicio_sessao = ExercicioSessao(
        sessao_id=sessao_id,
        exercicio_id=dados['exercicio_id'],
        ordem=proxima_ordem,
        series=dados.get('series'),
        repeticoes=dados.get('repeticoes'),
        peso=dados.get('peso')
    )
    
    db.session.add(exercicio_sessao)
    
    # Atualizar timestamp da sessão
    sessao.ultima_atualizacao = datetime.utcnow()
    
    db.session.commit()
    
    return jsonify({
        "mensagem": "Exercício adicionado à sessão com sucesso!",
        "exercicio_sessao": exercicio_sessao.to_dict()
    }), 201

# Remover exercício de uma sessão de treino
@sessao_bp.route('/usuarios/<int:usuario_id>/sessoes/<int:sessao_id>/exercicios/<int:exercicio_sessao_id>', methods=['DELETE'])
@verificar_propriedade_sessao
def remover_exercicio(usuario_id, sessao_id, exercicio_sessao_id):
    sessao = SessaoTreino.query.get(sessao_id)
    
    exercicio_sessao = ExercicioSessao.query.get(exercicio_sessao_id)
    if not exercicio_sessao or exercicio_sessao.sessao_id != sessao_id:
        return jsonify({"mensagem": "Exercício não encontrado nesta sessão"}), 404
    
    db.session.delete(exercicio_sessao)
    
    # Atualizar ordem dos exercícios restantes
    exercicios_restantes = ExercicioSessao.query.filter(
        ExercicioSessao.sessao_id == sessao_id,
        ExercicioSessao.ordem > exercicio_sessao.ordem
    ).all()
    
    for ex in exercicios_restantes:
        ex.ordem -= 1
    
    # Atualizar timestamp da sessão
    sessao.ultima_atualizacao = datetime.utcnow()
    
    db.session.commit()
    
    return jsonify({"mensagem": "Exercício removido da sessão com sucesso!"})

# Atualizar detalhes de um exercício em uma sessão (séries, repetições, peso, etc.)
@sessao_bp.route('/usuarios/<int:usuario_id>/sessoes/<int:sessao_id>/exercicios/<int:exercicio_sessao_id>', methods=['PUT'])
@verificar_propriedade_sessao
def atualizar_exercicio_sessao(usuario_id, sessao_id, exercicio_sessao_id):
    sessao = SessaoTreino.query.get(sessao_id)
    
    exercicio_sessao = ExercicioSessao.query.get(exercicio_sessao_id)
    if not exercicio_sessao or exercicio_sessao.sessao_id != sessao_id:
        return jsonify({"mensagem": "Exercício não encontrado nesta sessão"}), 404
    
    dados = request.get_json()
    
    # Atualizar campos se fornecidos
    if 'series' in dados:
        exercicio_sessao.series = dados['series']
    
    if 'repeticoes' in dados:
        exercicio_sessao.repeticoes = dados['repeticoes']
    
    if 'peso' in dados:
        exercicio_sessao.peso = dados['peso']
    
    if 'completado' in dados:
        exercicio_sessao.completado = dados['completado']
    
    if 'ordem' in dados:
        # Reordenar exercícios se a ordem for alterada
        nova_ordem = dados['ordem']
        ordem_antiga = exercicio_sessao.ordem
        
        if nova_ordem != ordem_antiga:
            if nova_ordem < ordem_antiga:
                # Mover para cima - incrementar exercícios entre nova_ordem e ordem_antiga
                exercicios_afetados = ExercicioSessao.query.filter(
                    ExercicioSessao.sessao_id == sessao_id,
                    ExercicioSessao.ordem >= nova_ordem,
                    ExercicioSessao.ordem < ordem_antiga,
                    ExercicioSessao.id != exercicio_sessao_id
                ).all()
                
                for ex in exercicios_afetados:
                    ex.ordem += 1
            else:
                # Mover para baixo - decrementar exercícios entre ordem_antiga e nova_ordem
                exercicios_afetados = ExercicioSessao.query.filter(
                    ExercicioSessao.sessao_id == sessao_id,
                    ExercicioSessao.ordem > ordem_antiga,
                    ExercicioSessao.ordem <= nova_ordem,
                    ExercicioSessao.id != exercicio_sessao_id
                ).all()
                
                for ex in exercicios_afetados:
                    ex.ordem -= 1
            
            exercicio_sessao.ordem = nova_ordem
    
    # Atualizar timestamp da sessão
    sessao.ultima_atualizacao = datetime.utcnow()
    
    db.session.commit()
    
    return jsonify({
        "mensagem": "Exercício na sessão atualizado com sucesso!",
        "exercicio_sessao": exercicio_sessao.to_dict()
    })

# Marcar/desmarcar exercício como completado
@sessao_bp.route('/usuarios/<int:usuario_id>/sessoes/<int:sessao_id>/exercicios/<int:exercicio_sessao_id>/completar', methods=['PATCH'])
@verificar_propriedade_sessao
def marcar_exercicio_completado(usuario_id, sessao_id, exercicio_sessao_id):
    sessao = SessaoTreino.query.get(sessao_id)
    
    exercicio_sessao = ExercicioSessao.query.get(exercicio_sessao_id)
    if not exercicio_sessao or exercicio_sessao.sessao_id != sessao_id:
        return jsonify({"mensagem": "Exercício não encontrado nesta sessão"}), 404
    
    dados = request.get_json()
    
    if 'completado' in dados:
        exercicio_sessao.completado = dados['completado']
    else:
        # Se não foi especificado, inverter o estado atual
        exercicio_sessao.completado = not exercicio_sessao.completado
    
    # Atualizar timestamp da sessão
    sessao.ultima_atualizacao = datetime.utcnow()
    
    db.session.commit()
    
    return jsonify({
        "mensagem": f"Exercício {'completado' if exercicio_sessao.completado else 'desmarcado'} com sucesso!",
        "exercicio_sessao": exercicio_sessao.to_dict()
    })

# Manter compatibilidade com rotas antigas (opcional) - podem ser removidas após migração completa
@sessao_bp.route('/sessoes', methods=['POST'])
def criar_sessao_legado():
    dados = request.get_json()
    if not dados or not all(k in dados for k in ("nome", "usuario_id")):
        return jsonify({"mensagem": "Dados inválidos: nome e usuario_id são obrigatórios"}), 400
    
    return criar_sessao(dados['usuario_id'])

@sessao_bp.route('/sessoes/<int:sessao_id>', methods=['GET'])
def obter_sessao_legado(sessao_id):
    sessao = SessaoTreino.query.get(sessao_id)
    if not sessao:
        return jsonify({"mensagem": "Sessão de treino não encontrada"}), 404
    
    return jsonify(sessao.to_dict())