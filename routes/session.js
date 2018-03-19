var fs = require('fs');
var path = require('path');
var session = require('express-session');

var express = require('express');
var router = express.Router();


router.get('/set/:name',(req,res)=>{
    req.session.userName = req.params.name; console.log('n : ',req.params.name)
    res.send('set')
});
router.get('/get/',(req,res)=>{
    res.send(req.session.userName)
});
router.get('/destroy/',(req,res)=>{
    req.session.destroy(err=>{
        if(err){
            res.send('err: '+err)
        }else{
            res.send('deleted')
        }
    });
});

module.exports = router;