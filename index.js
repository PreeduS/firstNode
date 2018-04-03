var express = require('express');
var router = express.Router();
var passport = require('passport');
var app = express();

const mongoose = require('mongoose');
mongoose.connect( require('./config').dbConnection );//cb
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


//console.log('---------------------------------------------------------------', process.env.NO_DB)

app.listen(2000, ()=>{
    console.log("app started...");
});





//process.env.PORT //global
