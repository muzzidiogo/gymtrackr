# migrate.py
from app import criar_app
from extensions import db

app = criar_app()

with app.app_context():
    # Excluir o banco de dados e recriá-lo
    db.drop_all()
    db.create_all()
    
    print("Banco de dados recriado com sucesso!")