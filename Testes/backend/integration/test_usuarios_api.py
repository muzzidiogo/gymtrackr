
import json
from backend import app

def test_registrar_usuario():
    client = app.test_client()
    response = client.post("/usuarios", json={
        "nome": "Gabriel",
        "email": "gabriel@example.com",
        "senha": "123456",
        "data_nascimento": "1995-10-10",
        "telefone": "31988887777",
        "altura": 1.80,
        "peso": 80.0
    })
    assert response.status_code == 201
    data = json.loads(response.data)
    assert "id" in data
