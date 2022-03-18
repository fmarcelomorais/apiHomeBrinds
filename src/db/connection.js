const mongoose = require('mongoose')
const connectionString = 'mongodb://localhost:27017/homebrinds'

async function connect(){
    await mongoose.connect(connectionString)
    //console.log('conectado ao mongose')
}

connect().catch(err => console.log(err))

module.exports = mongoose