var express = require('express');
var router = express.Router();
var passport = require('passport');
var app = express();

const sleep = require('./BE/utils/sleep');
global.rootRequire = path => require(__dirname + '/' + path);


app.use( async(req,res,next)=>{
    await sleep(3000);  
    next();
});

//Middleware
require('./BE/middleware')(app);

//Passport
require('./BE/config/passport')(passport);
app.use(passport.initialize());
app.use(passport.session());

//Routes
require('./BE/main-routes')(app);



app.listen(2000, ()=>{
    console.log("app started...");
});





//process.env.PORT //global
