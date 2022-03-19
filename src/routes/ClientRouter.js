const ClientController = require('../controller/ClientController');

const rota = require('express').Router()

rota.post('/register', ClientController.register)
rota.get('/', ClientController.clientsAll)
rota.post('/client/:_id', ClientController.clientById)
rota.delete('/delete/:_id', ClientController.delete)
rota.patch('/update/:_id', ClientController.updateClient)



module.exports = rota;