const porta = 3003

const express = require('express')
const app = express()

const bodyParser = require('body-parser')

const bancoDeDados = require('./bancodedados')

// app.get('/produtos', (req, res,next) => {
//     console.log('Middleware 1...')
//     next()
// })

app.use(bodyParser.urlencoded({extended: true}))
//qualquer requisição que você faz, obrigatoriamente passa pelo middleware!
//vai fazer um parse
//transforma em objeto!

//transforma todas as requisições

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)  //JSON
})


app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)  //JSON
})


app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto)  //JSON
})

app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`)
})