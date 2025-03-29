from flask import Blueprint, request, jsonify
from models.user import db, User  # Importando o banco de dados e o modelo de usuário

# Criando um Blueprint para as rotas de usuário
user_bp = Blueprint('user_bp', __name__)

# Rota para cadastro de usuário
@user_bp.route('/cadastro', methods=['POST'])
def cadastrar_usuario():
    nome = request.json.get('nome')
    email = request.json.get('email')
    senha = request.json.get('senha')

    if nome and email and senha:
        usuario = User(nome=nome, email=email, senha=senha)
        db.session.add(usuario)
        db.session.commit()
        return jsonify({"message": "Usuário cadastrado com sucesso!"}), 201
    return jsonify({"message": "Dados inválidos"}), 400

# Rota para editar usuário
@user_bp.route('/usuario/<int:id>', methods=['PUT'])
def editar_usuario(id):
    usuario = User.query.get(id)
    if usuario:
        nome = request.json.get('nome', usuario.nome)
        email = request.json.get('email', usuario.email)
        senha = request.json.get('senha', usuario.senha)

        usuario.nome = nome
        usuario.email = email
        usuario.senha = senha

        db.session.commit()
        return jsonify({"message": "Usuário atualizado com sucesso!"}), 200
    return jsonify({"message": "Usuário não encontrado"}), 404

# Rota para remover usuário
@user_bp.route('/usuario/<int:id>', methods=['DELETE'])
def remover_usuario(id):
    usuario = User.query.get(id)
    if usuario:
        db.session.delete(usuario)
        db.session.commit()
        return jsonify({"message": "Usuário removido com sucesso!"}), 200
    return jsonify({"message": "Usuário não encontrado"}), 404
