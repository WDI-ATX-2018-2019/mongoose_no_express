const mongoose = require('mongoose')
const catSchema = require('./schema')

const Cat = mongoose.model('Cat', catSchema)

module.exports = Cat