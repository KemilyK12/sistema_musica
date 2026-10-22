const mysql = require('mysql2');
const conexao = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "senai2026",
    database: "sistema_musica"
});


conexao.connect((error) => {
    if (error) {
        console.error("Erro ao conectar ao banco de dados:", error);
        return;
    }
    console.log("Conectado ao banco sistema_musica com sucesso!");
});

module.exports = conexao;

