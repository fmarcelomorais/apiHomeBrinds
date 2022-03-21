const rota = require('express').Router()

rota.get('/', (req, res) =>{
    res.send(`
        <h2>Rotas da aplicação<h2>
        <h2> GET </h2>
        <ul>
            <li> / </li>
            <li> /clients </li>
            <li> /products </li>
            <li> /requests </li>
        
        </ul>
        
        <h2> POST </h2>
        <ul>
        <li> /clients/register </li>
        <li> /clients/client/_id </li>
        <li> /products/register </li>
        <li> /products/product/_id</li>
        <li> /requests/register</li>
        <li> /requests/request/_id</li>
        </ul>
        
        <h2> PATCH </h2>
        <ul>
         <li> /clients/update/_id</li>
         <li> /products/update/_id</li>
         <li> /requests/update/_id</li>
        </ul>
        <h2> DELETE </h2>
        <ul>
         <li> /clients/delete/_id</li>
         <li> /products/delete/_id</li>
         <li> /requests/delete/_id</li>
         </ul>
        `)
})

module.exports = rota