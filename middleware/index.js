var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var expressValidator = require('express-validator');
var path = require('path');
var express = require('express');
var session = require('express-session');

module.exports = (app) =>{

    app.use(bodyParser.json());    
    app.use(bodyParser.urlencoded({extended:false})); //for req.body

    app.use(cookieParser());


    app.use(session({
        secret:'sc1234567',
        saveUninitialized:true,
        resave:true
    }));
    app.use('/',(req,res,next)=>{
        console.log('cookie: ',req.cookies);
        console.log('--------------------')
        console.log('session: ',req.session);
        next();
    });

    app.use(expressValidator());

    //app.use(express.static(path.join(__dirname,"public")));
    app.use("/",express.static(path.join(__dirname,"files")));

}   


/*
app.use((req, res, next)=>{
    req.someData="someData";
    next();
});
*/