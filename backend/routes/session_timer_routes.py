# routes/session_timer_routes.py
from flask import Blueprint, request, jsonify
from extensions import db
from models.session import SessaoTreino
from models.user import Usuario
from models.tempo_treino import TempoTreino
from models.session_timer import TimerSessao
from datetime import datetime
from functools import wraps

timer_bp = Blueprint('timer_bp', __name__)

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

# Iniciar uma sessão de treino (iniciar cronômetro)
@timer_bp.route('/usuarios/<int:usuario_id>/sessoes/<int:sessao_id>/iniciar', methods=['POST'])
@verificar_propriedade_sessao
def iniciar_sessao(usuario_id, sessao_id):
    # Verificar se a sessão existe
    sessao = SessaoTreino.query.get(sessao_id)
    
    # Verificar se já existe um timer ativo para esta sessão
    timer_ativo = TimerSessao.query.filter_by(sessao_id=sessao_id, ativo=True).first()
    if timer_ativo:
        return jsonify({
            "mensagem": "Esta sessão já possui um cronômetro ativo",
            "timer": timer_ativo.to_dict()
        }), 400
    
    # Criar novo timer
    novo_timer = TimerSessao(
        sessao_id=sessao_id,
        usuario_id=usuario_id,
        inicio=datetime.utcnow(),
        ativo=True
    )
    
    db.session.add(novo_timer)
    db.session.commit()
    
    return jsonify({
        "mensagem": "Cronômetro da sessão iniciado com sucesso!",
        "timer": novo_timer.to_dict()
    }), 201

# Finalizar uma sessão de treino (parar cronômetro)
@timer_bp.route('/usuarios/<int:usuario_id>/sessoes/<int:sessao_id>/finalizar', methods=['POST'])
@verificar_propriedade_sessao
def finalizar_sessao(usuario_id, sessao_id):
    # Verificar se a sessão existe
    sessao = SessaoTreino.query.get(sessao_id)
    
    # Procurar timer ativo para esta sessão
    timer_ativo = TimerSessao.query.filter_by(sessao_id=sessao_id, ativo=True).first()
    if not timer_ativo:
        return jsonify({"mensagem": "Não há cronômetro ativo para esta sessão"}), 404
    
    # Finalizar o timer e calcular a duração
    duracao = timer_ativo.finalizar()
    
    # Salvar também no modelo TempoTreino para manter o histórico geral
    tempo_treino = TempoTreino(
        usuario_id=usuario_id,
        duracao_segundos=duracao
    )
    
    db.session.add(tempo_treino)
    db.session.commit()
    
    return jsonify({
        "mensagem": "Cronômetro da sessão finalizado com sucesso!",
        "timer": timer_ativo.to_dict(),
        "duracao_segundos": duracao
    })

# Obter o timer atual de uma sessão
@timer_bp.route('/usuarios/<int:usuario_id>/sessoes/<int:sessao_id>/timer', methods=['GET'])
@verificar_propriedade_sessao
def obter_timer_sessao(usuario_id, sessao_id):
    # Verificar se a sessão existe
    sessao = SessaoTreino.query.get(sessao_id)
    
    # Procurar timer ativo para esta sessão
    timer_ativo = TimerSessao.query.filter_by(sessao_id=sessao_id, ativo=True).first()
    if not timer_ativo:
        return jsonify({"mensagem": "Não há cronômetro ativo para esta sessão", "ativo": False})
    
    # Calcular duração atual sem finalizar
    agora = datetime.utcnow()
    duracao_atual = (agora - timer_ativo.inicio).total_seconds()
    
    return jsonify({
        "timer": timer_ativo.to_dict(),
        "duracao_atual": duracao_atual,
        "ativo": True
    })

# Listar histórico de tempo de uma sessão
@timer_bp.route('/usuarios/<int:usuario_id>/sessoes/<int:sessao_id>/historico-tempo', methods=['GET'])
@verificar_propriedade_sessao
def historico_tempo_sessao(usuario_id, sessao_id):
    # Verificar se a sessão existe
    sessao = SessaoTreino.query.get(sessao_id)
    
    # Obter todos os timers finalizados para esta sessão
    timers = TimerSessao.query.filter_by(sessao_id=sessao_id, ativo=False).all()
    
    return jsonify([timer.to_dict() for timer in timers])

# Manter compatibilidade com rotas antigas (opcional) - podem ser removidas após migração completa
@timer_bp.route('/sessoes/<int:sessao_id>/iniciar', methods=['POST'])
def iniciar_sessao_legado(sessao_id):
    dados = request.get_json()
    
    # Verificar se a sessão existe
    sessao = SessaoTreino.query.get(sessao_id)
    if not sessao:
        return jsonify({"mensagem": "Sessão de treino não encontrada"}), 404
    
    # Usar a função nova com o ID do usuário da sessão
    return iniciar_sessao(sessao.usuario_id, sessao_id)

@timer_bp.route('/sessoes/<int:sessao_id>/finalizar', methods=['POST'])
def finalizar_sessao_legado(sessao_id):
    # Verificar se a sessão existe
    sessao = SessaoTreino.query.get(sessao_id)
    if not sessao:
        return jsonify({"mensagem": "Sessão de treino não encontrada"}), 404
    
    # Usar a função nova com o ID do usuário da sessão
    return finalizar_sessao(sessao.usuario_id, sessao_id)

@timer_bp.route('/sessoes/<int:sessao_id>/timer', methods=['GET'])
def obter_timer_sessao_legado(sessao_id):
    # Verificar se a sessão existe
    sessao = SessaoTreino.query.get(sessao_id)
    if not sessao:
        return jsonify({"mensagem": "Sessão de treino não encontrada"}), 404
    
    # Usar a função nova com o ID do usuário da sessão
    return obter_timer_sessao(sessao.usuario_id, sessao_id)

@timer_bp.route('/sessoes/<int:sessao_id>/historico-tempo', methods=['GET'])
def historico_tempo_sessao_legado(sessao_id):
    # Verificar se a sessão existe
    sessao = SessaoTreino.query.get(sessao_id)
    if not sessao:
        return jsonify({"mensagem": "Sessão de treino não encontrada"}), 404
    
    # Usar a função nova com o ID do usuário da sessão
    return historico_tempo_sessao(sessao.usuario_id, sessao_id)