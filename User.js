const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  uname: {
    type: String,
    required: true
  },
  fname: String,
  lname: String,
  age: Number
})

module.exports = mongoose.model('User', userSchema)