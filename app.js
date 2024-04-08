const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;

const db server = 'Vini_PC'


app.use(express.json)

app.get('/', (req, res) => {
    res.send("Bem-Vindo á minha primeira API")
})

app.get('/livros', (req, res) => {
    const livros = ["Livro 1", "Livro 2"]
    res.json(livros)
})

app.post('/livros', (req, res) => {
    const newBook = req.body

    res.status(201).send("Item adicionado com sucesso!")
})

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
})