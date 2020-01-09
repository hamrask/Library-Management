const mongoose = require('mongoose');

const LogSchema = new mongoose.Schema({
   LogID: {
    type:String,
    required:true,
    min:4,
    max:50
  },
  UniqueID: {
    type:String,
    required:true,
    min:4,
    max:50
  },
  LogDate: {
    type:date,
    required:true
  },
  CustomerID: {
    type:Number,
    required:true
  },
  Type: {
    type:Number,
    required:true
  }
});

module.exports = mongoose.model('Logs',LogSchema);