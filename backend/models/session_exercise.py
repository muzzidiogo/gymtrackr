# models/session_exercise.py
from extensions import db

class ExercicioSessao(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    sessao_id = db.Column(db.Integer, db.ForeignKey('sessao_treino.id'), nullable=False)
    exercicio_id = db.Column(db.Integer, db.ForeignKey('exercicio.id'), nullable=False)
    ordem = db.Column(db.Integer, nullable=False)  # Ordem do exercício na sessão
    series = db.Column(db.Integer, nullable=True)  # Número de séries
    repeticoes = db.Column(db.Integer, nullable=True)  # Número de repetições
    peso = db.Column(db.Float, nullable=True)  # Peso em kg
    completado = db.Column(db.Boolean, default=False)  # Marca se o exercício foi completado
    
    # Relações
    sessao = db.relationship('SessaoTreino', back_populates='exercicios')
    exercicio = db.relationship('Exercicio', back_populates='sessoes')
    
    def to_dict(self):
        return {
            "id": self.id,
            "sessao_id": self.sessao_id,
            "exercicio_id": self.exercicio_id,
            "exercicio": self.exercicio.to_dict(),
            "ordem": self.ordem,
            "series": self.series,
            "repeticoes": self.repeticoes,
            "peso": self.peso,
            "completado": self.completado
        }