const express = require('express')

const app = express()

// conexao com o banco
//const connection = require('./src/db/connection')

// Rotas
const clientRouter = require('./routes/ClientRouter')
const productRouter = require('./routes/ProductRouter')
const requestRouter = require('./routes/RequestsRouter')

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/clients', clientRouter)
app.use('/products', productRouter)
app.use('/requests', requestRouter)


module.exports = app