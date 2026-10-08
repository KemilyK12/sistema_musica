const mysql = require('mysql2');
const conexao = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "senai2026",
    database: "sistema_musica"
});


conexao.connect((err) => {
    if (err) {
        console.error("Erro ao conectar ao banco de dados:", err);
        return;
    }
    console.log("Conectado ao banco sistema_musica com sucesso!");
});

module.exports = conexao;