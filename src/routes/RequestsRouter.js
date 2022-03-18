const rota = require('express').Router()

const RequesteController = require('../controller/RequestControll')


rota.post('/register', RequesteController.createRequest)
rota.get('/', RequesteController.requestsAll)


module.exports = rota