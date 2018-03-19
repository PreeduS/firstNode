var path = require('path');
var fs = require('fs');

var express = require('express');
var router = express.Router();
var app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/testDb');
const db = mongoose.connection;

//console.log('db : ',db)
db.on('error',err=>console.log('db err: ',err))
db.once('open',()=>console.log('db connected'))


//Middleware
require('./middleware')(app);

//Routes
require('./main-routes')(app);






app.listen(2000, ()=>{
    console.log("app started...");
});




/*
process.env.PORT
//--------

//deprecated
/*
app.post('/post/test',(req, res) =>{
    req.check('username','uname err').notEmpty().isLength({min:5,max:10});
    req.checkBody('password','password err').notEmpty().equals(req.body.password2)
    req.checkBody('password2','password2 err').notEmpty();
    var err = req.validationErrors();
    if(err){
        var errors = err.reduce( (acc,value)=>{
            acc[value.param] = value.msg;
            return acc;
        },{});
        console.log('err: ',err)
        console.log('errorserr: ',errors)
    }

    res.send(JSON.stringify(req.body) + '<br />' + JSON.stringify(errors) );
});
*/