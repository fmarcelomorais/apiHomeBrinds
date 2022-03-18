const mongoose = require('../db/connection')
const { Schema } = require('mongoose')

const Client = mongoose.model('Cliente',
    new Schema({
        name:{
            type: String,
            required: true
        },
        contact1: {
            type: String,
             required: true },
        contact2: {
            type: String,
            required: false },
        email: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        }
           
    })
)

module.exports = Client