const rota = require('express').Router()

const RequesteController = require('../controller/RequestController')


rota.get('/', RequesteController.requestsAll)
rota.post('/register', RequesteController.createRequest)
rota.post('/request/:_id', RequesteController.requestById)
rota.patch('/update/:_id', RequesteController.updateRequest)
rota.delete('/delete/:_id', RequesteController.deleteRequest)

module.exports = rota