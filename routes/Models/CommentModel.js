const Sequelize = require('sequelize');
//const connection = require('./_connection');

module.exports = (connection) => connection.define('comment', {
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate:{
            len:{
                args: [1,1000],
                msg:'content len validation[1-1000]'
            }
        }
    },
    replyTo:{
        type: Sequelize.INTEGER,
        allowNull: true
    },
    groupId:{
        type: Sequelize.INTEGER,
        allowNull: true
    },
    //fk
    threadId:{ 
        type: Sequelize.INTEGER,
        allowNull: false
    },
    //fk
    userId:{
        type: Sequelize.INTEGER,
        allowNull: false
    }
},{timestamps:false});

