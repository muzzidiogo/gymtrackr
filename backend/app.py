from flask import Flask
from flask_sqlalchemy import SQLAlchemy

# Inicializando o banco de dados
db = SQLAlchemy()

# Função para criar o aplicativo Flask
def create_app():
    # Inicializando o aplicativo Flask
    app = Flask(__name__)

    # Configurando o banco de dados SQLite
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///gymtrackr.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    # Inicializando o banco de dados
    db.init_app(app)

    # Importando as rotas de usuário (depois de definir o app)
    from routes.user_routes import user_bp
    app.register_blueprint(user_bp)

    # Definindo a rota para a página inicial
    @app.route('/')
    def home():
        return "Bem-vindo ao GymTrackr!"

    return app

# Rodando o servidor
if __name__ == "__main__":
    app = create_app()  # Criando a instância do app
    app.run(debug=True)
