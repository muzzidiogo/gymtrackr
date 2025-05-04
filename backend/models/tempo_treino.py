# models/tempo_treino.py
from extensions import db
from datetime import datetime

class TempoTreino(db.Model):
    __tablename__ = 'tempos_treino'
    
    id = db.Column(db.Integer, primary_key=True)
    usuario_id = db.Column(db.Integer, db.ForeignKey('usuario.id'))
    duracao_segundos = db.Column(db.Float, nullable=False)
    data = db.Column(db.DateTime, default=datetime.utcnow)
    
    # Relacionamento
    usuario = db.relationship('Usuario', back_populates='tempos')
    
    def to_dict(self):
        return {
            "id": self.id,
            "usuario_id": self.usuario_id,
            "duracao_segundos": self.duracao_segundos,
            "data": self.data.strftime('%Y-%m-%d %H:%M:%S')
        }