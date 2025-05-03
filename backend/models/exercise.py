# models/exercise.py
from extensions import db

class Exercicio(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(100), nullable=False)
    musculo_primario = db.Column(db.String(50), nullable=False)
    musculo_secundario = db.Column(db.String(100), nullable=True)
    descricao = db.Column(db.Text, nullable=True)
    
    # Relação com ExercicioSessao
    sessoes = db.relationship('ExercicioSessao', back_populates='exercicio', cascade='all, delete-orphan')
    
    def to_dict(self):
        return {
            "id": self.id,
            "nome": self.nome,
            "musculo_primario": self.musculo_primario,
            "musculo_secundario": self.musculo_secundario,
            "descricao": self.descricao
        }