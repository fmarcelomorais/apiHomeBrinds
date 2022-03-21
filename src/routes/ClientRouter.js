const rota = require('express').Router()

const ClientController = require('../controller/ClientController');

rota.get('/', ClientController.clientsAll)
rota.post('/register', ClientController.createClient)
rota.post('/client/:_id', ClientController.clientById)
rota.patch('/update/:_id', ClientController.updateClient)
rota.delete('/delete/:_id', ClientController.deleteClient)



module.exports = rota;