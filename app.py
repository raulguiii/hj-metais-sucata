from flask import Flask, render_template, request, redirect, url_for, session, flash
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

@app.route("/")
def index():
    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)
