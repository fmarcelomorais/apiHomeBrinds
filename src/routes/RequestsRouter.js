const rota = require('express').Router()

const RequesteController = require('../controller/RequestControll')


rota.post('/adicionar', RequesteController.createRequest)
rota.get('/', RequesteController.requestsAll)


module.exports = rota