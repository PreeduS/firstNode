const Sequelize = require('sequelize');

const connection = require('./SequelizeConnection');
/*
const connection = new Sequelize('first_db', 'postgres', '123456', {
    host: 'localhost',
    dialect: 'postgres'
    //port: 1234
});
*/
connection.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});

//models
const Comment = require('./CommentModel')(connection);
const Thread = require('./ThreadModel')(connection);
const User = require('./UserModel')(connection);


//Relations
Thread.hasMany(Comment,{foreignKey:'threadId',sourceKey:'id'});  

module.exports.Comment = Comment;
module.exports.Thread = Thread;
module.exports.User = User;
module.exports.connection = connection;


