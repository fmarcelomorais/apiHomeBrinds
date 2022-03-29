const express = require('express')

const app = express()

// Rotas
const clientRouter = require('./routes/ClientRouter')
const productRouter = require('./routes/ProductRouter')
const requestRouter = require('./routes/RequestsRouter')
const rootRouter = require('./routes/RootRouter')

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/', rootRouter)
app.use('/clients', clientRouter)
app.use('/products', productRouter)
app.use('/requests', requestRouter)


module.exports = app