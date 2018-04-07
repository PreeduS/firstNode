const Sequelize = require('sequelize');
const connection = new Sequelize('first_db', 'postgres', '123456', {
    host: 'localhost',
    dialect: 'postgres'
    //port: 1234
});

module.exports = connection;