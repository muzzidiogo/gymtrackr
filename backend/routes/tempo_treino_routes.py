# routes/tempo_treino_routes.py
from flask import Blueprint, request, jsonify
from extensions import db
from models.tempo_treino import TempoTreino
from models.user import Usuario
from functools import wraps

bp_tempo = Blueprint('tempo_treino', __name__)

# Decorator para verificar se o usuário existe
def verificar_usuario_existente(f):
    @wraps(f)
    def decorated_function(usuario_id, *args, **kwargs):
        # Verificar se o usuário existe
        usuario = Usuario.query.get(usuario_id)
        if not usuario:
            return jsonify({"mensagem": "Usuário não encontrado"}), 404
        
        return f(usuario_id, *args, **kwargs)
    return decorated_function

@bp_tempo.route('/usuarios/<int:usuario_id>/tempo', methods=['POST'])
@verificar_usuario_existente
def salvar_tempo(usuario_id):
    dados = request.get_json()
    duracao = dados.get('duracao_segundos')

    if not duracao:
        return jsonify({'erro': 'Duração do treino é obrigatória'}), 400

    tempo = TempoTreino(usuario_id=usuario_id, duracao_segundos=duracao)
    db.session.add(tempo)
    db.session.commit()

    return jsonify({
        'mensagem': 'Tempo salvo com sucesso',
        'tempo': tempo.to_dict()
    }), 201

@bp_tempo.route('/usuarios/<int:usuario_id>/tempo', methods=['GET'])
@verificar_usuario_existente
def listar_tempos(usuario_id):
    tempos = TempoTreino.query.filter_by(usuario_id=usuario_id).all()
    return jsonify([t.to_dict() for t in tempos])

# Obter estatísticas de tempo de treino
@bp_tempo.route('/usuarios/<int:usuario_id>/tempo/estatisticas', methods=['GET'])
@verificar_usuario_existente
def estatisticas_tempo(usuario_id):
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

# Manter compatibilidade com rotas antigas (opcional) - podem ser removidas após migração completa
@bp_tempo.route('/tempo', methods=['POST'])
def salvar_tempo_legado():
    dados = request.get_json()
    usuario_id = dados.get('usuario_id')
    
    if not usuario_id:
        return jsonify({'erro': 'ID do usuário é obrigatório'}), 400
        
    return salvar_tempo(usuario_id)

@bp_tempo.route('/tempo/<int:usuario_id>', methods=['GET'])
def listar_tempos_legado(usuario_id):
    return listar_tempos(usuario_id)

@bp_tempo.route('/tempo/<int:usuario_id>/estatisticas', methods=['GET'])
def estatisticas_tempo_legado(usuario_id):
    return estatisticas_tempo(usuario_id)