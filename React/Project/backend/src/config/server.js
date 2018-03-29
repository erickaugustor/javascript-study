const port = 3003

const bodyParser = require('body-parser')
const express = require('express')

const server = express()

const allowCors = require('./cors')

server.use(bodyParser.urlencoded({ extended: true }))
// Sempre que chega uma requisição, url encoded, usará o bodyParser

// Middleware, chain of responsabilit
// Todas as requisições passaram por esse Middleware

server.use(bodyParser.json())
server.use(allowCors)


server.listen(port, function(){
    console.log(`BACKEND is running on port ${port}.`)
})

module.exports = server