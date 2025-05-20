const express = require('express');
const axios = require('axios');
const mongoose = require('mongoose');

const app = express();

//conexao com o banco de dados

const mongoUri = 'mongodb+srv://tmdelling:2003@a3.dujepfc.mongodb.net/oderserver?retryWrites=true&w=majority&appName=A3';

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected');
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
    });

const orderSchema = new mongoose.Schema({
    id: String,
    name: String,
    email: String,
    produto: String,
    quantidade: Number,
});

// Cria o modelo de usuário com base no esquema
// O modelo é uma representação do esquema e é usado para interagir com o banco de dados

const User = mongoose.model('User', orderSchema);

app.post('/usuarios', async (req, res) => {

    try {
        const usuasrio = req.body;
        const user = new User(usuario);
        await user.save();

        //await axios.post('http://localhost:4000/pedidos', {
            //userId: usuario.id,
           // produto: usuario.produto,
           // quantidade: usuario.quantidade,

      //  });
        // Envia a resposta de sucesso

        res.send({ mensagem: 'Usuário criado com sucesso!', usuario:user });
    }
    catch (error) {
        console.error('Erro ao criar usuário:', error);
        res.status(500).send({ mensagem: 'Erro ao criar usuário' });
    }
});

app.listen(3000, () => {
    console.log('Servidor de usuários rodando na porta 3000');
});
// O servidor está escutando na porta 3000