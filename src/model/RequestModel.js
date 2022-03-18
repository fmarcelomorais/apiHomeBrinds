const mongoose = require('../db/connection')
const { Schema } = require('mongoose')


const Request = mongoose.model('Request', 
    new Schema({

        dateRequest:{
            type: Date,
            required: true
        },
        dateDelivery:{
            type: Date,
            required: true
        },
        products:{
            type: Array,
            required: true
        },
        entrance:{
            type: Number,
        },
        total:{
            type: Number,  
            required: true          
        },
        payment:{
            type: String,
            required: true
        },
        delivery:{
            type: String,
            required: true
        },
        note:{
            type: String
        },
        status:{
            type: String,
             required: true
        }
        
    })
)

module.exports = Request
