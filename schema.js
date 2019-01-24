const mongoose = require('mongoose')

const CatSchema = new mongoose.Schema({
  name: String,
  age: Number
})

module.exports = CatSchema
