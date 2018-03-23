var fs = require('fs');
var path = require('path');

var express = require('express');
var router = express.Router();


router.get('/cookie',(req, res)=>{
    res.cookie('cName','cVal',{ maxAge:20*1000 });
    //res.clearCookie('cName');  //{path:'/'}
    //req.cookie.someName //req
    res.send('cookie..');
});

module.exports = router;


