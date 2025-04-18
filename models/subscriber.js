const mongoose = require('mongoose')
const { subscribe } = require('../routes/subscribers')
const subscriberSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true 
    },
    subscribedToChannel:{
        type: String,
        required: true

    },
    subscribeDate:{
        type: Date,
        required: true,
        default: Date.now

    }
})

module.exports = mongoose.model('Subscriber',subscriberSchema)