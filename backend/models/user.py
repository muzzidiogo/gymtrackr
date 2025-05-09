# models/user.py
from extensions import db
from datetime import datetime
from passlib.hash import pbkdf2_sha256

class Usuario(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    senha = db.Column(db.String(200), nullable=False)
    data_nascimento = db.Column(db.Date, nullable=True)
    telefone = db.Column(db.String(20), nullable=True)
    altura = db.Column(db.Float, nullable=True)  # em centímetros
    peso = db.Column(db.Float, nullable=True)    # em quilogramas
    data_criacao = db.Column(db.DateTime, default=datetime.utcnow)
    
    # Relacionamentos
    sessoes = db.relationship('SessaoTreino', back_populates='usuario', cascade='all, delete-orphan')
    timers_sessao = db.relationship('TimerSessao', back_populates='usuario', cascade='all, delete-orphan')
    tempos = db.relationship('TempoTreino', back_populates='usuario', cascade='all, delete-orphan')
    
    def to_dict(self):
        return {
            "id": self.id,
            "nome": self.nome,
            "email": self.email,
            "data_nascimento": self.data_nascimento.strftime('%Y-%m-%d') if self.data_nascimento else None,
            "telefone": self.telefone,
            "altura": self.altura,
            "peso": self.peso
        }
    
    @staticmethod
    def hash_senha(senha):
        return pbkdf2_sha256.hash(senha)
    
    def verificar_senha(self, senha):
        return pbkdf2_sha256.verify(senha, self.senha)