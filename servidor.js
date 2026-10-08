const express = require("express"); //express é um framework para criar aplicações web em Node.js
const cors = require("cors");
const conexao = require("./db.js");

const app = express();
const PORTA = 3000;
//npm i express cors mysql2

app.use(cors());
app.use(express.json()); //chave e valor

app.get("/", (req, res) => {
    res.status(200).json({mensagem: "API Sistema de música funcionando"});
});

app.listen(PORTA, () => {
    console.log(`Servidor rodando em http://localhost:${PORTA}`);
});
