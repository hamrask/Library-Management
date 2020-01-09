const mongoose = require('mongoose');

const userschema = new mongoose.Schema({
  username: {
      type:String,
      required:true,
      min:4,
      max:256
  },
  password: {
    type:String,
    required:true,
    min:4,
    max:256
  }  
});

module.exports = mongoose.model('User',userschema);