import sys
import os

# Adicionar diretório raiz ao path para importação dos módulos
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from flask import Flask
from extensions import db
from models import Usuario, Exercicio, SessaoTreino, ExercicioSessao

def criar_app():
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///gymtrackr.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    db.init_app(app)
    return app

def populate_exercises(app):
    with app.app_context():
        # Verificar se já existem exercícios no banco
        if Exercicio.query.count() > 0:
            print("O banco de dados já contém exercícios. Pulando inicialização.")
            return
            
        # Lista de exercícios pré-definidos
        exercicios = [
            # Peito
            {"nome": "Supino Reto (Barra)", "musculo_primario": "Peito", "musculo_secundario": "Tríceps, Ombros"},
            {"nome": "Supino Inclinado (Barra)", "musculo_primario": "Peito", "musculo_secundario": "Tríceps, Ombros"},
            {"nome": "Supino Declinado (Barra)", "musculo_primario": "Peito", "musculo_secundario": "Tríceps, Ombros"},
            {"nome": "Supino Reto (Halteres)", "musculo_primario": "Peito", "musculo_secundario": "Tríceps, Ombros"},
            {"nome": "Supino Inclinado (Halteres)", "musculo_primario": "Peito", "musculo_secundario": "Tríceps, Ombros"},
            {"nome": "Crucifixo (Halteres)", "musculo_primario": "Peito", "musculo_secundario": "Ombros"},
            {"nome": "Crucifixo no Peck Deck", "musculo_primario": "Peito", "musculo_secundario": "Ombros"},
            {"nome": "Crossover (Cabos)", "musculo_primario": "Peito", "musculo_secundario": "Ombros"},
            {"nome": "Flexão de Braço", "musculo_primario": "Peito", "musculo_secundario": "Tríceps, Ombros"},
            {"nome": "Mergulho (Paralelas)", "musculo_primario": "Peito", "musculo_secundario": "Tríceps, Ombros"},
            
            # Costas
            {"nome": "Puxada Aberta (Pulley)", "musculo_primario": "Costas", "musculo_secundario": "Bíceps"},
            {"nome": "Puxada Fechada (Pulley)", "musculo_primario": "Costas", "musculo_secundario": "Bíceps"},
            {"nome": "Remada Curvada (Barra)", "musculo_primario": "Costas", "musculo_secundario": "Bíceps"},
            {"nome": "Remada Unilateral (Halter)", "musculo_primario": "Costas", "musculo_secundario": "Bíceps"},
            {"nome": "Remada Sentada (Máquina)", "musculo_primario": "Costas", "musculo_secundario": "Bíceps"},
            {"nome": "Remada Cavalinho", "musculo_primario": "Costas", "musculo_secundario": "Lombares"},
            {"nome": "Levantamento Terra", "musculo_primario": "Costas", "musculo_secundario": "Pernas, Lombares"},
            {"nome": "Pull-up (Barra Fixa)", "musculo_primario": "Costas", "musculo_secundario": "Bíceps"},
            {"nome": "Pullover (Halter)", "musculo_primario": "Costas", "musculo_secundario": "Peito, Tríceps"},
            {"nome": "Hiperextensão Lombar", "musculo_primario": "Costas", "musculo_secundario": "Glúteos"},
            
            # Ombros
            {"nome": "Desenvolvimento (Barra)", "musculo_primario": "Ombros", "musculo_secundario": "Tríceps"},
            {"nome": "Desenvolvimento (Halteres)", "musculo_primario": "Ombros", "musculo_secundario": "Tríceps"},
            {"nome": "Elevação Lateral", "musculo_primario": "Ombros", "musculo_secundario": ""},
            {"nome": "Elevação Frontal", "musculo_primario": "Ombros", "musculo_secundario": "Peito"},
            {"nome": "Encolhimento de Ombros", "musculo_primario": "Ombros", "musculo_secundario": "Trapézio"},
            {"nome": "Crucifixo Invertido", "musculo_primario": "Ombros", "musculo_secundario": "Costas"},
            {"nome": "Remada Alta", "musculo_primario": "Ombros", "musculo_secundario": "Trapézio"},
            {"nome": "Face Pull", "musculo_primario": "Ombros", "musculo_secundario": "Costas"},
            
            # Bíceps
            {"nome": "Rosca Direta (Barra)", "musculo_primario": "Bíceps", "musculo_secundario": "Antebraço"},
            {"nome": "Rosca Alternada (Halteres)", "musculo_primario": "Bíceps", "musculo_secundario": "Antebraço"},
            {"nome": "Rosca Concentrada", "musculo_primario": "Bíceps", "musculo_secundario": ""},
            {"nome": "Rosca Martelo", "musculo_primario": "Bíceps", "musculo_secundario": "Antebraço"},
            {"nome": "Rosca Scott", "musculo_primario": "Bíceps", "musculo_secundario": ""},
            {"nome": "Rosca no Cabo", "musculo_primario": "Bíceps", "musculo_secundario": "Antebraço"},
            {"nome": "Rosca 21", "musculo_primario": "Bíceps", "musculo_secundario": "Antebraço"},
            
            # Tríceps
            {"nome": "Tríceps Corda (Pulley)", "musculo_primario": "Tríceps", "musculo_secundario": ""},
            {"nome": "Tríceps Barra (Pulley)", "musculo_primario": "Tríceps", "musculo_secundario": ""},
            {"nome": "Tríceps Testa (Barra)", "musculo_primario": "Tríceps", "musculo_secundario": ""},
            {"nome": "Tríceps Coice (Halter)", "musculo_primario": "Tríceps", "musculo_secundario": ""},
            {"nome": "Tríceps Francês", "musculo_primario": "Tríceps", "musculo_secundario": ""},
            {"nome": "Supino Fechado", "musculo_primario": "Tríceps", "musculo_secundario": "Peito"},
            {"nome": "Mergulho no Banco", "musculo_primario": "Tríceps", "musculo_secundario": "Peito, Ombros"},
            
            # Pernas (Quadríceps)
            {"nome": "Agachamento Livre", "musculo_primario": "Quadríceps", "musculo_secundario": "Glúteos, Posteriores"},
            {"nome": "Leg Press", "musculo_primario": "Quadríceps", "musculo_secundario": "Glúteos"},
            {"nome": "Cadeira Extensora", "musculo_primario": "Quadríceps", "musculo_secundario": ""},
            {"nome": "Hack Squat", "musculo_primario": "Quadríceps", "musculo_secundario": "Glúteos"},
            {"nome": "Avanço (Passada)", "musculo_primario": "Quadríceps", "musculo_secundario": "Glúteos"},
            {"nome": "Agachamento Sumô", "musculo_primario": "Quadríceps", "musculo_secundario": "Glúteos, Adutores"},
            
            # Pernas (Posteriores)
            {"nome": "Mesa Flexora", "musculo_primario": "Posteriores", "musculo_secundario": ""},
            {"nome": "Cadeira Flexora", "musculo_primario": "Posteriores", "musculo_secundario": ""},
            {"nome": "Stiff", "musculo_primario": "Posteriores", "musculo_secundario": "Glúteos, Lombares"},
            {"nome": "Bom Dia", "musculo_primario": "Posteriores", "musculo_secundario": "Lombares"},
            {"nome": "Elevação Pélvica", "musculo_primario": "Glúteos", "musculo_secundario": "Posteriores"},
            
            # Pernas (Panturrilha)
            {"nome": "Panturrilha Em Pé", "musculo_primario": "Panturrilha", "musculo_secundario": ""},
            {"nome": "Panturrilha Sentado", "musculo_primario": "Panturrilha", "musculo_secundario": ""},
            {"nome": "Panturrilha Unilateral", "musculo_primario": "Panturrilha", "musculo_secundario": ""},
            
            # Abdômen
            {"nome": "Abdominal Supra", "musculo_primario": "Abdômen", "musculo_secundario": ""},
            {"nome": "Abdominal Infra", "musculo_primario": "Abdômen", "musculo_secundario": ""},
            {"nome": "Abdominal Oblíquo", "musculo_primario": "Abdômen", "musculo_secundario": ""},
            {"nome": "Prancha", "musculo_primario": "Abdômen", "musculo_secundario": "Lombares"},
            {"nome": "Elevação de Pernas", "musculo_primario": "Abdômen", "musculo_secundario": ""},
            {"nome": "Roda Abdominal", "musculo_primario": "Abdômen", "musculo_secundario": "Lombares"}
        ]
        
        # Adicionar exercícios ao banco de dados
        for exercicio_data in exercicios:
            exercicio = Exercicio(**exercicio_data)
            db.session.add(exercicio)
            
        # Commit das alterações
        db.session.commit()
        print(f"Banco de dados inicializado com {len(exercicios)} exercícios!")

if __name__ == "__main__":
    app = criar_app()
    
    # Criar todas as tabelas se não existirem
    with app.app_context():
        db.create_all()
        
    # Povoar o banco de dados com exercícios
    populate_exercises(app)
    print("Inicialização do banco de dados concluída!")