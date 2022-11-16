let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect with model

let Book = require('../models/book')

/*Read Operation*/
/* get route*/

router.get('/', (req,res,next)=>{
    Book.find((err, booklist)=>{
      if(err)
      {
        return console.error(err);      
    }
    else
    {
        res.render('book',{
            title: 'Book List', 
            Booklist: booklist
        });
    }  
    });
});

module.exports = router;
/*routing done*/
/*config the router from ./config/app.js */