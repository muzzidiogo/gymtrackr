# models/session.py
from extensions import db
from datetime import datetime

class SessaoTreino(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(100), nullable=False)
    usuario_id = db.Column(db.Integer, db.ForeignKey('usuario.id'), nullable=False)
    data_criacao = db.Column(db.DateTime, default=datetime.utcnow)
    ultima_atualizacao = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    
    # Relações
    usuario = db.relationship('Usuario', back_populates='sessoes_treino')
    exercicios = db.relationship('ExercicioSessao', back_populates='sessao', cascade='all, delete-orphan')
    
    def to_dict(self):
        return {
            "id": self.id,
            "nome": self.nome,
            "usuario_id": self.usuario_id,
            "data_criacao": self.data_criacao.strftime('%Y-%m-%d %H:%M:%S'),
            "ultima_atualizacao": self.ultima_atualizacao.strftime('%Y-%m-%d %H:%M:%S'),
            "exercicios": [exercicio.to_dict() for exercicio in self.exercicios]
        }