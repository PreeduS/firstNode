const express = require('express');
const router = express.Router();

//const connection = require('../Models').connection;

//models
const Thread = require('../../Models').Thread;



router.get("/getThreads",(req,res)=>{         
   /*[tempTag]*/ res.send( require('./Mockups/ThreadsSelect.json') ); return;
    
    Thread.findAll().then(threads => {
        res.send(threads);
    });
});



router.get("/addThread",(req,res)=>{
    const threadMockup = [{
        content:'thread 1',
        category: 'placeholder',
        userId: 1
    }];

    Thread.bulkCreate(threadMockup)
    .then((result, err)=>{
        res.send(result); 
    }).catch(err=>{
        return res.send('catch err: '+err)
    });
   

});


module.exports = router;

