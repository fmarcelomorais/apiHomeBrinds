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

        const clients = await Client.find()

        res.status(200).json(clients)

    }

    static async clientById(req, res){
        const _id = req.params._id
        
        const client = await Client.findById(_id)

        res.status(200).json(client)
    }
}