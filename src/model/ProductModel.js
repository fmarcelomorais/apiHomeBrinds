const mongoose = require('../db/connection')
const { Schema } = require('mongoose')

const Product = mongoose.model('Product', 
    new Schema({
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        }
    })
)

module.exports = Product

