'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema   

const ProductSchema = Schema({
    name: String,
    price: Number,
    category: {type: String, enum: ['phones', 'clothes', 'utils']},
    description: String

})

module.exports = mongoose.model('Product', ProductSchema);