const rota = require('express').Router()

rota.get('/', (req, res) =>{
    res.send(`
        <h2>Rotas da aplicação<h2>
        <p> /clients</p>
        <p> /products</p>
        <p> /requests</p>
        `)
})

module.exports = rota