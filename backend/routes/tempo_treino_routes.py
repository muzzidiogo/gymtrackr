# routes/tempo_treino_routes.py
from flask import Blueprint, request, jsonify
from extensions import db
from models.tempo_treino import TempoTreino
from models.user import Usuario

bp_tempo = Blueprint('tempo_treino', __name__)

@bp_tempo.route('/tempo', methods=['POST'])
def salvar_tempo():
    dados = request.get_json()
    usuario_id = dados.get('usuario_id')
    duracao = dados.get('duracao_segundos')

    if not usuario_id or not duracao:
        return jsonify({'erro': 'Dados incompletos'}), 400
    
    # Verificar se o usuário existe
    usuario = Usuario.query.get(usuario_id)
    if not usuario:
        return jsonify({"mensagem": "Usuário não encontrado"}), 404

    tempo = TempoTreino(usuario_id=usuario_id, duracao_segundos=duracao)
    db.session.add(tempo)
    db.session.commit()

    return jsonify({
        'mensagem': 'Tempo salvo com sucesso',
        'tempo': tempo.to_dict()
    }), 201

@bp_tempo.route('/tempo/<int:usuario_id>', methods=['GET'])
def listar_tempos(usuario_id):
    # Verificar se o usuário existe
    usuario = Usuario.query.get(usuario_id)
    if not usuario:
        return jsonify({"mensagem": "Usuário não encontrado"}), 404
        
    tempos = TempoTreino.query.filter_by(usuario_id=usuario_id).all()
    return jsonify([t.to_dict() for t in tempos])

# Obter estatísticas de tempo de treino
@bp_tempo.route('/tempo/<int:usuario_id>/estatisticas', methods=['GET'])
def estatisticas_tempo(usuario_id):
    # Verificar se o usuário existe
    usuario = Usuario.query.get(usuario_id)
    if not usuario:
        return jsonify({"mensagem": "Usuário não encontrado"}), 404
    
    from sqlalchemy import func
    
    # Total de tempo de treino
    total_tempo = db.session.query(func.sum(TempoTreino.duracao_segundos))\
        .filter_by(usuario_id=usuario_id).scalar() or 0
    
    # Média de tempo por treino
    media_tempo = db.session.query(func.avg(TempoTreino.duracao_segundos))\
        .filter_by(usuario_id=usuario_id).scalar() or 0
    
    # Quantidade de treinos registrados
    qtd_treinos = db.session.query(func.count(TempoTreino.id))\
        .filter_by(usuario_id=usuario_id).scalar() or 0
    
    return jsonify({
        "total_segundos": total_tempo,
        "media_segundos": media_tempo,
        "total_treinos": qtd_treinos
    })