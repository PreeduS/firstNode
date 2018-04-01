const Sequelize = require('sequelize');

module.exports = (connection) => connection.define('thread', {
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
        category:{  
            type: Sequelize.STRING({length:30}),
            allowNull: false,
        },
        //fk
        userId:{
            type: Sequelize.INTEGER,
            allowNull: false
        }
        /*,
        pageId:{       //fk to separate table maybe
            type: Sequelize.INTEGER,
            allowNull: false,
        }*/

        
    },{timestamps:false});

