const mongoose = require('mongoose')
const Schema = mongoose.Schema

var SampleObject = new Schema({
  string: String,
  number: Number
})

module.exports = mongoose.model('sample-object', SampleObject)
