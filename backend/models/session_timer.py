# models/session_timer.py
from extensions import db
from datetime import datetime

class TimerSessao(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    sessao_id = db.Column(db.Integer, db.ForeignKey('sessao_treino.id'), nullable=False)
    usuario_id = db.Column(db.Integer, db.ForeignKey('usuario.id'), nullable=False)
    inicio = db.Column(db.DateTime, default=datetime.utcnow)
    fim = db.Column(db.DateTime, nullable=True)
    duracao_segundos = db.Column(db.Float, nullable=True)
    ativo = db.Column(db.Boolean, default=True)
    
    # Um timer está relacionado a uma única sessão
    sessao = db.relationship(
        'SessaoTreino', 
        foreign_keys=[sessao_id], 
        back_populates='timers'
    )
    
    # Um timer está relacionado a usuário com cascata de exclusão
    usuario = db.relationship(
        'Usuario', 
        back_populates='timers_sessao'
    )
    
    def calcular_duracao(self):
        if self.fim:
            delta = self.fim - self.inicio
            self.duracao_segundos = delta.total_seconds()
            return self.duracao_segundos
        return None
    
    def finalizar(self):
        if self.ativo:
            self.fim = datetime.utcnow()
            self.ativo = False
            self.calcular_duracao()
            return self.duracao_segundos
        return None
    
    def to_dict(self):
        return {
            "id": self.id,
            "sessao_id": self.sessao_id,
            "usuario_id": self.usuario_id,
            "inicio": self.inicio.strftime('%Y-%m-%d %H:%M:%S') if self.inicio else None,
            "fim": self.fim.strftime('%Y-%m-%d %H:%M:%S') if self.fim else None,
            "duracao_segundos": self.duracao_segundos,
            "ativo": self.ativo
        }