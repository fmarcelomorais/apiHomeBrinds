const Request = require('../model/RequestModel')

module.exports = class RequesteController {

    static async createRequest(req, res) {
         
        const { dateRequest, dateDelivery, products, entrance, total, payment, delivery, note, status } = req.body

        if(dateRequest === ""){
            res.status(400).json({message: 'Data da entrega é obrigatório'})
        }
        if(products.length < 1){
            res.status(400).json({message: 'Produtos é obrigatório'})
        }
        if(entrance === ""){
            res.status(400).json({message: 'Entrada é obrigatório'})
        }
        if(total === ""){
            res.status(400).json({message: 'Total do pedido é obrigatório'})
        }
        if(payment === ""){
            res.status(400).json({message: 'Forma de pagamento é obrigatório'})
        }
        if(delivery === ""){
            res.status(400).json({message: 'Tipo de entrega é obrigatório'})
        }
        if(status === ""){
            res.status(400).json({message: 'Status do pedido é obrigatório'})
        }


        const request = new Request({
            dateRequest,
            dateDelivery,
            products,
            entrance,
            total,
            payment,
            delivery,
            note,
            status
        })

        try {           
            await request.save()
            res.status(201).json(request)
        } catch (error) {
            res.status(200).json({message: 'Cadastrado com sucesso.'})
        }
    }

    static async requestsAll(req, res){

        try {            
            const requests = await Request.find()
            res.status(200).json(requests)
        } catch (error) {
            res.status(400).json({message: error.message})
        }
    }

    static async requestById(req, res){

        const _id = req.params._id

        try {
            
            const request = await Request.findById(_id)
            res.status(200).json(request)

        } catch (error) {

            res.status(400).json({message: error.message})
        }

    }   

    static async updateRequest(req, res){
        const _id = req.params._id

        const {
            dataRequest,
            dataDelivery,
            products,
            entrance,
            total,
            payment,
            delivery,
            note,
            status

         } = req.body

         const request = {
            dataRequest,
            dataDelivery,
            products,
            entrance,
            total,
            payment,
            delivery,
            note,
            status
         }

         try {
             
             await Request.findByIdAndUpdate(_id, request)
             res.status(200).json({message: 'Prdido alterado com sucesso'})

         } catch (error) {
             res.status(400).json({message: error.message})
         }

    }

    static async deleteRequest(req, res){
        const _id = req.params._id

        try {
            
            await Request.findByIdAndDelete(_id)
            res.status(200).json({message: 'Exluido com sucesso.'})
            
        } catch (error) {

            res.status(400).json({message: error.message})
        }
    }
}