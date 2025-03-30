# routes/user_routes.py
from flask import Blueprint, request, jsonify
from extensions import db
from models.user import Usuario

usuario_bp = Blueprint('usuario_bp', __name__)

# Criar um usuário
@usuario_bp.route('/usuarios', methods=['POST'])
def criar_usuario():
    dados = request.get_json()
    if not dados or not all(k in dados for k in ("nome", "email", "senha")):
        return jsonify({"mensagem": "Dados inválidos"}), 400
    
    # Verificar se o email já existe
    usuario_existente = Usuario.query.filter_by(email=dados['email']).first()
    if usuario_existente:
        return jsonify({"mensagem": "Email já está em uso"}), 400
    
    novo_usuario = Usuario(
        nome=dados['nome'],
        email=dados['email'],
        senha=dados['senha']  # Em produção, esta senha deve ser criptografada!
    )
    
    db.session.add(novo_usuario)
    db.session.commit()
    
    return jsonify({
        "mensagem": "Usuário criado com sucesso!",
        "usuario": novo_usuario.to_dict()
    }), 201

# Listar usuários
@usuario_bp.route('/usuarios', methods=['GET'])
def listar_usuarios():
    usuarios = Usuario.query.all()
    return jsonify([usuario.to_dict() for usuario in usuarios])

# Obter um usuário específico
@usuario_bp.route('/usuarios/<int:id>', methods=['GET'])
def obter_usuario(id):
    usuario = Usuario.query.get(id)
    if not usuario:
        return jsonify({"mensagem": "Usuário não encontrado"}), 404
    return jsonify(usuario.to_dict())

# Editar um usuário
@usuario_bp.route('/usuarios/<int:id>', methods=['PUT'])
def editar_usuario(id):
    usuario = Usuario.query.get(id)
    if not usuario:
        return jsonify({"mensagem": "Usuário não encontrado"}), 404
    
    dados = request.get_json()
    
    if 'nome' in dados:
        usuario.nome = dados['nome']
    
    if 'email' in dados and dados['email'] != usuario.email:
        # Verificar se o novo email já está em uso
        email_existente = Usuario.query.filter_by(email=dados['email']).first()
        if email_existente:
            return jsonify({"mensagem": "Email já está em uso"}), 400
        usuario.email = dados['email']
    
    if 'senha' in dados:
        usuario.senha = dados['senha']  # Em produção, esta senha deve ser criptografada!
    
    db.session.commit()
    
    return jsonify({
        "mensagem": "Usuário atualizado com sucesso!",
        "usuario": usuario.to_dict()
    })

# Deletar um usuário
@usuario_bp.route('/usuarios/<int:id>', methods=['DELETE'])
def remover_usuario(id):
    usuario = Usuario.query.get(id)
    if not usuario:
        return jsonify({"mensagem": "Usuário não encontrado"}), 404
    
    db.session.delete(usuario)
    db.session.commit()
    
    return jsonify({"mensagem": "Usuário removido com sucesso!"})