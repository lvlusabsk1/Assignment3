let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect with model

let Run = require('../models/run')

/*Read Operation*/
/* get route*/

router.get('/', (req,res,next)=>{
    Run.find((err, runs)=>{
      if(err)
      {
        return console.error(err);      
    }
    else
    {
        res.render('run',{
            title: 'Runs List', 
            Runs: runs
        });
    }  
    });
});

module.exports = router;
/*routing done*/
/*config the router from ./config/app.js */