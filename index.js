var express = require('express');
var router = express.Router();
var passport = require('passport');
var app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/testDb');//cb
const db = mongoose.connection;

db.on('error',err=>console.log('db err: ',err))
db.once('open',()=>console.log('db connected'))

//Middleware
require('./middleware')(app);

//Passport
require('./config/passport')(passport);
app.use(passport.initialize());
app.use(passport.session());

//Routes
require('./main-routes')(app);



app.listen(2000, ()=>{
    console.log("app started...");
});




/*
process.env.PORT //global
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