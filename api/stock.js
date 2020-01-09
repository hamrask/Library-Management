const express  =  require('express');
const router = express.Router();
const book  = require('../models/Book');

router.post('/save',async (req,res)=>{
    try {
        console.log('object');
        const data = new book(req.body);
        const response = await data.save();
        res.send(response)
    } catch (error) {
        res.status(400);   
    }
});
router.get('/get',(req,res)=>{
    
});
router.get('/',(req,res)=>{
    try {
        book.find({BookID:121211},(err,docs)=>{
            if(err){
                res.send(err);
            } else {
                res.send(docs);
            }
        });
        
    } catch (error) {
        res.send(err);
    }
    
    res.send('data'); 
});

module.exports = router