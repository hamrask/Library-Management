const mongoose = require('mongoose');

const IssueSchema = new mongoose.Schema({
   IssueID: {
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
  UniqueCode: {
    type:String,
    required:true,
    min:4,
    max:256
  },
  Date: {
    type:Date,
    required:true
  },
  IssueDate: {
    type:Date,
    required:true
  },
  DueDate: {
    type:Date,
    required:true
  },
  ReturnDate: {
    type:Date,
    required:true
  },
  Status: {
      type:Boolean,
      required:true
  }
});

module.exports = mongoose.model('Issues',IssueSchema);