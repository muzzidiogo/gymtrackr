# models/session.py
from extensions import db
from datetime import datetime

class SessaoTreino(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(100), nullable=False)
    usuario_id = db.Column(db.Integer, db.ForeignKey('usuario.id'), nullable=False)
    data_criacao = db.Column(db.DateTime, default=datetime.utcnow)
    ultima_atualizacao = db.Column(db.DateTime, default=datetime.utcnow)
    
    # Relações usando back_populates de forma consistente
    usuario = db.relationship('Usuario', back_populates='sessoes')
    exercicios = db.relationship('ExercicioSessao', back_populates='sessao', cascade='all, delete-orphan')
    
    # Uma sessão pode ter apenas um timer ativo (uselist=False)
    timer_ref = db.relationship(
        'TimerSessao', 
        primaryjoin="and_(SessaoTreino.id==TimerSessao.sessao_id, TimerSessao.ativo==True)",
        viewonly=True,      # Somente leitura
        uselist=False,      # Um único timer ativo
        overlaps="timers"   # Resolve o alerta de sobreposição
    )
    
    # Relação com todos os timers da sessão (histórico)
    timers = db.relationship(
        'TimerSessao', 
        back_populates='sessao', 
        cascade='all, delete-orphan'
    )
    
    def to_dict(self):
        return {
            "id": self.id,
            "nome": self.nome,
            "usuario_id": self.usuario_id,
            "data_criacao": self.data_criacao.strftime('%Y-%m-%d %H:%M:%S'),
            "ultima_atualizacao": self.ultima_atualizacao.strftime('%Y-%m-%d %H:%M:%S'),
            "exercicios": [exercicio.to_dict() for exercicio in self.exercicios],
            "timer_ativo": self.timer_ref.to_dict() if self.timer_ref else None
        }