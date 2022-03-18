const Request = require('../model/RequestModel')

module.exports = class RequesteController {

    static async createRequest(req, res) {
         
        const { dateRequest, dateDelivery, products, entrance, total, payment, delivery, note, status } = req.body

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

        await request.save()

        res.status(201).json(request)
    }

    static async requestsAll(req, res){

        const requests = await Request.find()

        res.status(200).json(requests)
    }
}