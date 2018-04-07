var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var expressValidator = require('express-validator');
var path = require('path');
var express = require('express');
var session = require('express-session');

const SequelizeConnection = require('../Models/SequelizeConnection');

module.exports = (app) =>{

    app.use(bodyParser.json());    
    app.use(bodyParser.urlencoded({extended:false})); //for req.body

    app.use(cookieParser());
    

    //store
    var SequelizeStore = require('connect-session-sequelize')(session.Store);
    var store = new SequelizeStore({
        db: SequelizeConnection
    });
    

   
    app.use(session({
        secret:'sc1234567',
        saveUninitialized:false,
        resave:false,
        name:'sessionName',
        cookie:{
            maxAge:10*60*1000
        },
       store: store

    }));
    
    store.sync();

    app.use('/',(req,res,next)=>{
        //req.session.wqeqwe = wqeq
        //console.log('cookie: ',req.cookies);
        //console.log('--------------------')

        /*
            console.log('session: ',req.session);
            //console.log('session exp: ',req.session.cookie._expires);
            console.log('session exp: ',Date.parse(req.session.cookie._expires) );
            console.log('now: ',Date.now());
            if( Date.parse(req.session.cookie._expires) < Date.now() ){
                console.log('session expired')
            }else{  console.log('session NOT expired') }
        */

        next();
    });
    

    app.use(expressValidator());

    //app.use(express.static(path.join(__dirname,"public")));
    app.use("/",express.static(path.join(__dirname,"../public")));
    app.use("/",express.static(path.join(__dirname,"../FE/build")));
}   
