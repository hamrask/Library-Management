const mongoose = require('mongoose');

const BookRegSchema = new mongoose.Schema({
   UniqueCode: {
    type:String,
    required:true,
    min:4,
    max:50
  },
  BookID: {
    type:String,
    required:true,
    min:4,
    max:50
  },
  Status: {
      type:Boolean,
      required: true
  }
});

module.exports = mongoose.model('BookReg',BookRegSchema);