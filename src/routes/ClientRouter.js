const ClientController = require('../controller/ClientController');

const rota = require('express').Router()

rota.post('/register', ClientController.register)
rota.get('/', ClientController.clientsAll)
rota.post('/:_id', ClientController.clientById)



module.exports = rota;