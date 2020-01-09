const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
   BookID: {
    type:String,
    required:true,
    min:4,
    max:50
  },
  BookName: {
    type:String,
    required:true,
    min:4,
    max:50
  },
  ISBN: {
    type:String,
    required:true,
    min:4,
    max:256
  },
  Quantity: {
      type:Number,
      required:true,
      min:0,
      max:99999
  }  
});

module.exports = mongoose.model('Book',BookSchema);