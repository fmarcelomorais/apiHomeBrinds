const rota = require('express').Router()

const ProductController = require('../controller/ProductController')

rota.get('/', ProductController.productsAll)
rota.post('/register', ProductController.createProduct)
rota.post('/product/:_id', ProductController.productById)
rota.patch('/update/:_id', ProductController.updateProduct)
rota.delete('/delete/:_id', ProductController.deleteProduct)




module.exports = rota