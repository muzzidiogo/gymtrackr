# app.py
from flask import Flask
from extensions import db, migrate, cors
from models.user import Usuario

def criar_app():
    app = Flask(__name__)
    
    # Configuração do banco de dados
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///gymtrackr.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    
    # Inicializar extensões
    db.init_app(app)
    migrate.init_app(app, db)
    cors.init_app(app)
    
    # Registrar blueprints
    from routes.user_routes import usuario_bp
    app.register_blueprint(usuario_bp, url_prefix='/api')
    
    @app.route('/')
    def home():
        return "Bem-vindo ao GymTrackr!"
    
    return app

if __name__ == '__main__':
    app = criar_app()
    
    # Criar as tabelas no banco de dados (apenas para desenvolvimento)
    with app.app_context():
        db.create_all()
    
    app.run(debug=True)