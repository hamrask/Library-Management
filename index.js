const express = require('express');
const env = require('dotenv');
const app = express();
const mongoose = require('mongoose');
const usermodel = require('./User');

env.config();

mongoose.connect(process.env.DB_CONNECT,
()=>{
    console.log('db connected');
});
app.use(express.json());
app.use('/',require('./api/stock'));

const PORT  = process.env.PORT ||5000;

app.listen(PORT,()=>{
console.log('Server started'); 
});