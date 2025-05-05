
import pytest
from backend.models.usuario import Usuario

def test_usuario_creation():
    user = Usuario(
        nome="Teste",
        email="teste@example.com",
        senha="senha123",
        data_nascimento="1990-01-01",
        telefone="31999999999",
        altura=1.75,
        peso=70.5
    )
    assert user.nome == "Teste"
    assert user.email == "teste@example.com"
    assert user.altura > 0
    assert user.peso > 0
