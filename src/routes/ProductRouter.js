const rota = require('express').Router()

const ProductController = require('../controller/ProductController')

rota.post('/register', ProductController.register)
rota.get('/', ProductController.productsAll)
rota.post('/:_id', ProductController.productById)

module.exports = rota