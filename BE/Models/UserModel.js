const Sequelize = require('sequelize');

module.exports = (connection) => connection.define('user', {
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    username:{  
        type: Sequelize.STRING({length:200}),
        allowNull: false,
        unique:true,
        validate:{
            len:{
                args: [4,200],
                msg:'username len validation[4-200]'
            }
        }        
    },
    password: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    email:{  
        type: Sequelize.STRING({length:255}),
        allowNull: false,
        unique:true,
        validate:{
            len:{
                args: [1,255]
            }
        }        
    },
    
},{timestamps:false});
