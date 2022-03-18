const Product = require('../model/ProductModel')

module.exports = class ProductController {

    static async register(req, res) {

        const { 
            name,
            price
        } = req.body

        const product = new Product({
            name,
            price
        })

        await product.save()

        res.status(201).json(product)
    }

    static async productsAll(req, res){

        const products = await Product.find()

        res.status(200).json(products)
    }

    static async productById(req, res){
        const _id = req.params._id

        const product = await Product.findById(_id)

        res.status(200).json(product)
    }
}