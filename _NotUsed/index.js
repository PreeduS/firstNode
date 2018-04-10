
//...

const mongoose = require('mongoose');
mongoose.connect( require('./config').dbConnection );//cb
const db = mongoose.connection;

db.on('error',err=>console.log('db err: ',err))
db.once('open',()=>console.log('db connected'))

//...