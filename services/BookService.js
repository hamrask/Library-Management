const Book = require('../models/book');

//save book
const SaveBook = (data) =>{
    const obj = new Book(data);
    obj.save();
}
