const express = require("express")
const app = express()

app.use(express.json())

let usuarios = []
let pedidos = []

// rota para cadastro de usuario

app.post("/usuarios", (req, res) => {
    const usuario = req.body;
    usuarios.push(usuario)
    res.send({message: "usuario cadastrado com sucesso", usuario})
})

app.get("/dados", (req, res) => {
    res.send({usuarios})
})
app.listen(3000, () => console.log("servidor monolitico on, na porta 3000"))