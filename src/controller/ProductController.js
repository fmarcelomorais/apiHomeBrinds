const Product = require('../model/ProductModel')

module.exports = class ProductController {

    static async createProduct(req, res) {

        const { 
            name,
            price
        } = req.body


        if(name === ""){
            res.status(400).json({message: 'Nome do produto obrigatório'})
        }
        if(price === ""){
            res.status(400).json({message: 'Preço do produto obrigatório'})
        }

        const product = new Product({
            name,
            price
        })

        try {
            await product.save()
            res.status(201).json(product)
            
        } catch (error) {
            res.status(400).json({message: error.message})
        }
    }

    static async productsAll(req, res){

        try {
            
            const products = await Product.find()
            res.status(200).json(products)

        } catch (error) {

            res.status(400).json({message: error.message})
        }
    }

    static async productById(req, res){
        const _id = req.params._id

        try {

            const product = await Product.findById(_id)
            res.status(200).json(product)
            
        } catch (error) {
            
            res.status(400).json({message: error.message})
        }
    }

    static async updateProduct(req, res){
        const _id = req.params._id

        const {name, price} = req.body

        const product = {
            name,
            price
        }

        try {
            await Product.findByIdAndUpdate(_id, product)
            res.status(200).json({message: 'produto alterado com sucesso.'})
        } catch (error) {
            res.status(400).json({message: error.message})
        }
    }

    static async deleteProduct(req, res){
        const _id = req.params._id

        try {
            Product.findByIdAndDelete(_id).exec()
            res.status(200).json({message: 'Excluido com sucesso.'})
        } catch (error) {
            res.status(400).json({message: error.message})
        }
    }
}