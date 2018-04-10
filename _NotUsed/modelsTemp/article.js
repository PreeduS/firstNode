const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
    title:{
        type: String,
        required: [true,'Title is required']
    },
    author:{
        type: String,
        required: true
    },
    body:{
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Article',articleSchema);