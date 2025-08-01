from flask import Flask, request, jsonify, render_template
import mysql.connector
from mysql.connector import Error

app = Flask(__name__)
app.secret_key = "sua_chave_secreta_aqui"  # importante para sessões

db_config = {
    "host": "localhost",
    "user": "root",
    "password": "raulgui123!",
    "database": "db_hj_metais_sucata"
}

def get_db_connection():
    try:
        conn = mysql.connector.connect(**db_config)
        return conn
    except Error as e:
        print(f"Erro de conexão: {e}")
        return None


@app.route('/')
def index():
    return render_template('index.html')







#                                    Á G U A 

@app.route("/api/agua", methods=["GET"])
def get_agua():
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM agua ORDER BY data DESC")
    rows = cursor.fetchall()
    conn.close()
    return jsonify(rows)



@app.route("/api/agua", methods=["POST"])
def adicionar_agua():
    data = request.get_json()

    titulo = data.get("titulo")
    data_pagamento = data.get("data")
    valor = data.get("valor")

    # Verificação básica
    if not titulo or not data_pagamento or not valor:
        return jsonify({"erro": "Dados incompletos"}), 400

    # Remove "R$" e formata o valor para salvar no banco como decimal
    try:
        valor_formatado = float(valor.replace('R$', '').replace('.', '').replace(',', '.'))
    except ValueError:
        return jsonify({"erro": "Valor inválido"}), 400

    try:
        conn = get_db_connection()
        cursor = conn.cursor()

        # Inserir na tabela agua
        cursor.execute(
            "INSERT INTO agua (titulo, data, valor) VALUES (%s, %s, %s)",
            (titulo, data_pagamento, valor_formatado)
        )

        # Inserir na tabela geral
        cursor.execute(
            "INSERT INTO geral (titulo, data, valor) VALUES (%s, %s, %s)",
            (titulo, data_pagamento, valor_formatado)
        )

        conn.commit()
        conn.close()

        return jsonify({"mensagem": "Pagamento registrado com sucesso"}), 201

    except Error as e:
        print(f"Erro ao inserir pagamento: {e}")
        return jsonify({"erro": "Erro no servidor"}), 500























if __name__ == "__main__":
    app.run(debug=True)
