const express = require('express');
const app = express();

app.use(express.json());

let orders = []; //array para armazenar as ordens

app.post('/pedidos', (req, res) => {

    const {id, product, quantity} = req.body;
    if (!id || !product || !quantity) {
        return res.status(400).send ({ message: 'dados do pedido invalidos'});
    }

    const newOrder = (id, product, quantity);  
    orders.push(newOrder);
    res.status(201).send({ message: 'Pedido cadastrado com sucesso', order: newOrder})
});


app.listen(4000, () => console.log("order service rodando na porta 4000"));
