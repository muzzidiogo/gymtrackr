# routes/session_timer_routes.py
from flask import Blueprint, request, jsonify
from extensions import db
from models.session import SessaoTreino
from models.user import Usuario
from models.tempo_treino import TempoTreino
from models.session_timer import TimerSessao
from datetime import datetime

timer_bp = Blueprint('timer_bp', __name__)

# Iniciar uma sessão de treino (iniciar cronômetro)
@timer_bp.route('/sessoes/<int:sessao_id>/iniciar', methods=['POST'])
def iniciar_sessao(sessao_id):
    dados = request.get_json()
    
    # Verificar se a sessão existe
    sessao = SessaoTreino.query.get(sessao_id)
    if not sessao:
        return jsonify({"mensagem": "Sessão de treino não encontrada"}), 404
    
    # Verificar se o usuário existe
    usuario_id = dados.get('usuario_id', sessao.usuario_id)
    usuario = Usuario.query.get(usuario_id)
    if not usuario:
        return jsonify({"mensagem": "Usuário não encontrado"}), 404
    
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
@timer_bp.route('/sessoes/<int:sessao_id>/finalizar', methods=['POST'])
def finalizar_sessao(sessao_id):
    # Verificar se a sessão existe
    sessao = SessaoTreino.query.get(sessao_id)
    if not sessao:
        return jsonify({"mensagem": "Sessão de treino não encontrada"}), 404
    
    # Procurar timer ativo para esta sessão
    timer_ativo = TimerSessao.query.filter_by(sessao_id=sessao_id, ativo=True).first()
    if not timer_ativo:
        return jsonify({"mensagem": "Não há cronômetro ativo para esta sessão"}), 404
    
    # Finalizar o timer e calcular a duração
    duracao = timer_ativo.finalizar()
    
    # Salvar também no modelo TempoTreino para manter o histórico geral
    tempo_treino = TempoTreino(
        usuario_id=timer_ativo.usuario_id,
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
@timer_bp.route('/sessoes/<int:sessao_id>/timer', methods=['GET'])
def obter_timer_sessao(sessao_id):
    # Verificar se a sessão existe
    sessao = SessaoTreino.query.get(sessao_id)
    if not sessao:
        return jsonify({"mensagem": "Sessão de treino não encontrada"}), 404
    
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
@timer_bp.route('/sessoes/<int:sessao_id>/historico-tempo', methods=['GET'])
def historico_tempo_sessao(sessao_id):
    # Verificar se a sessão existe
    sessao = SessaoTreino.query.get(sessao_id)
    if not sessao:
        return jsonify({"mensagem": "Sessão de treino não encontrada"}), 404
    
    # Obter todos os timers finalizados para esta sessão
    timers = TimerSessao.query.filter_by(sessao_id=sessao_id, ativo=False).all()
    
    return jsonify([timer.to_dict() for timer in timers])