const express = require('express');
const bodyParser = require('body-parser');
const basicAuth = require('express-basic-auth');
// require('body-parser-xml')(bodyParser);
// const bearerAuth = require('express-bearer-token'); 

const app = express();
const PORT = process.env.PORT || 3000;

const users = { 'user': 'password' };

app.use(bodyParser.json());

// app.use(bodyParser.xml())

// app.use(bearerAuth('tokenBearer'))

app.use(basicAuth({
    users: users,
    unauthorizedResponse: (req) => {
        return 'Acesso negado.';
    }
}));

let livros = [
    { id: 1, titulo: 'Livro 1', autor: 'Autor 1' },
    { id: 2, titulo: 'Livro 2', autor: 'Autor 2' }
];
// Rota para obter todos os livros
app.get('/livros', (req, res) => {
    res.json(livros);
});

app.post('/livros', (req, res) => {
    console.log('Recebendo solicitação POST para /livros');

    const { titulo, autor } = req.body;

    console.log('Título recebido:', titulo);
    console.log('Autor recebido:', autor);

    const id = livros.length + 1;

    console.log('Gerando ID para o novo livro:', id);

    livros.push({ id, titulo, autor });

    console.log('Livro adicionado com sucesso à lista de livros:', { id, titulo, autor });

    res.status(201).json({ id, titulo, autor });
});


app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
