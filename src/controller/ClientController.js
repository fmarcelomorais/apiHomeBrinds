const Client = require('../model/ClientModel')

module.exports = class ClientController {

    static async register(req, res){

        const {
            name,
            contact1,
            contact2,
            email,
            address,            
        } = req.body

        if(name === ""){
            res.status(400).json({message: 'O nome é obrigatório'})
            return
        }
        if(contact1 === ""){
            res.status(400).json({message: 'O contato 1 é obrigatório'})
            return
        }
        if(email === ""){
            res.status(400).json({message: 'O email é obrigatório'})
            return
        }
        if(address === ""){
            res.status(400).json({message: ' O Endereço é obrigatório'})
            return
        }

        const client = new Client({
            name,
            contact1,
            contact2,
            email,
            address,
        })

        await client.save()
        res.status(201).json(client)

    }

    static async clientsAll(req, res){

        try {
            const clients = await Client.find()
            res.status(200).json(clients)
            
        } catch (error) {
            res.status(400).json({message: error.message})
        }

    }

    static async clientById(req, res){
        const _id = req.params._id
        
        const client = await Client.findById(_id)

        res.status(200).json(client)
    }

    static async updateClient(req, res){
        const _id = req.params._id
        const { name, contact1, contact2, email, address } = req.body

        
        
        const client = {
             name, contact1, contact2, email, address
        }
        
        try {
            await Client.findByIdAndUpdate(_id, client)
            res.status(200).json({message: 'Alterado com sucesso'})
            
        } catch (error) {
            res.status(400).json({message: error.message})
        }

    }

    static async delete(req, res){

        const _id = req.params._id

        try {
            
            Client.findByIdAndRemove(_id).exec()
            res.status(200).json({message: 'Deletado com Sucesso.'})

        } catch (error) {
            res.status(400).json({message: error.message})
        }

    }

}