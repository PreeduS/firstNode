var express = require('express');
var router = express.Router();



//npm install --save sequelize
//npm install --save pg pg-hstore
const Sequelize = require('sequelize');
const connection = new Sequelize('databaseName', 'username', 'password', {
    host: 'localhost',
    dialect: 'postgres'
    //port: 1234
});


connection.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});

const Thread = connection.define('thread', {
        //{unique:true}
    title: {
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
            //len:[1,10],
            len:{
                args: [1,10],
                msg:'len validation msg'
            }
        }
    },
    content: {
      type: Sequelize.Text,
      allowNull: false,
    },
    parentId:{
        type: Sequelize.INTEGER,
        allowNull: false,
    }
  },{timestamps:false});

//hooks check later

// force: true will drop the table if it already exists
Thread.sync({force: true}).then(() => {
    // Table created
    return Thread.create({
        title: 'title...',
        content: 'content...'
    });
});




router.get('/find',(req, res)=>{

    Thread.findAll().then(threads => {
        console.log('threads: ',threads)
    });
    
    Thread.findOne().then(thread => {
        console.log(thread.get('title'));
    });
    
    
    


    res.send('...');
});

router.get('/create',(req, res)=>{

    //create = build + save
    var thread = Thread.build({
        title: 'title2...',
        content: 'content2...'
    });
    thread.save();

});

module.exports = router;



/*
connection
  .query(
    'SELECT * FROM projects WHERE status = ?',
    { raw: true, replacements: ['active']
  )
  .then(projects => {
    console.log(projects)
  })
//OR
  .query(
    'SELECT * FROM projects WHERE status = :status ',
    { raw: true, replacements: { status: 'active' } }
  )  

  */

//querying
/*
.findById(id).then(result => {   });
.findOne({ where: {title: 'aProject'} }).then(result => {   });

.findOrCreate({where: {username: 'sdepold'}})
.spread((result, created) => {
    console.log( result.get('...') )
})    

.findAll({ where: { id: [1,2,3] }, offset:5, limit:10 })        //1,2 or 3

.findAll({
    where:{
        [Op.and]: {a: 5},           // AND (a = 5)
        [Op.or]: [{a: 5}, {a: 6}],  // (a = 5 OR a = 6)
        [Op.ne]: 20,               // id != 20
        ...
        title: '...',
        [Op.or]: [
            { id: [1,2,3] },
            { id: { [Op.gt]: 10 } }
          ]

    },
    order: 'title DESC'
})

*/
//------
//include

/*

//1:1
Comments.belongsTo(Thread,{foreignKey:'fk_threadId',targetKey:'primaryKeyKolumn'}) //one-to-one // targetKey - defaults to Thread primary key //fk to Comments
Team.hasOne(Player);  //same as belongsTo but source & target are reversed


Thread.hasMany(Comments);       //adds fk ThreadId to comments 
*/