const express = require("express");
const app = express();

app.use(express.json());

let usuarios = [];
let pedidos = [];

// Rota para cadastro de usuario
app.post("/usuarios", (req, res) => {
    const usuario = req.body;
    usuarios.push(usuario);
    res.send({ message: "Usuário cadastrado com sucesso", usuario });
});

// Rota para consulta de dados de usuários
app.get("/dados", (req, res) => {
    res.send({ usuarios });
});

// Rota para cadastro de pedidos
app.post("/pedidos", (req, res) => {
    const pedido = req.body;
    pedidos.push(pedido);
    res.send({ message: "Pedido cadastrado com sucesso", pedido });
});

// Rota para consulta de pedidos (corrigido)
app.get("/pedidos", (req, res) => {  // Alterei de /pedido para /pedidos
    res.send({ pedidos });  // Retorna todos os pedidos cadastrados
});

// Inicia o servidor na porta 3000
app.listen(3000, () => console.log("Servidor monolítico ON, na porta 3000"));
