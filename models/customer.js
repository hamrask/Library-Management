const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
   CustomerID: {
    type:String,
    required:true,
    min:4,
    max:50
  },
  CustomerName: {
    type:String,
    required:true,
    min:4,
    max:50
  },
  IdNumber: {
    type:String,
    required:true,
    min:4,
    max:256
  } 
});

module.exports = mongoose.model('Customer',CustomerSchema);