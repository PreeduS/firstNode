const fs = require('fs');
const path = require('path');
const express = require('express');
const router = express.Router();



/*
const Sequelize = require('sequelize');

//temp pass & connection here [tempTag]
const connection = new Sequelize('first_db', 'postgres', '123456', {
    host: 'localhost',
    dialect: 'postgres'
    //port: 1234
});

connection.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});
*/
const connection = require('../Models').connection;

//models
const Comment = require('../Models').Comment;
const Thread = require('../Models').Thread;





//Comment.sync({force: false}).then(() => {
connection.sync({force: false}).then(() => {

});


router.get("/getComments",(req,res)=>{
    Comment.findAll().then(c => {
        res.json(c);
    });

   

});
router.get("/addComment",(req,res)=>{
    Comment.create({
        content: 'content...',
        replyTo: null,
        groupId: null,
        threadId: 1,
        userId: 1
    }).then((result, err)=>{
        res.json(result.get({plain:true}));  //+'<br />' + JSON.stringify( result.get() )  +'<br />'    
    });
   

});

router.get("/addComments",(req,res)=>{
    const commentsMockup = require('./Mockups/CommentsInsert.json');

    Comment.bulkCreate(commentsMockup)
    .then((result, err)=>{
        res.send(result); 
    }).catch(err=>{
        return res.send('catch err: '+err)
    });
   

});
router.get("/addThread",(req,res)=>{
    const threadMockup = [{
        content:'thread 1',
        category: 'placeholder',
        userId: 1
    }];

    Thread.bulkCreate(threadMockup)
    .then((result, err)=>{
        res.send(result); 
    }).catch(err=>{
        return res.send('catch err: '+err)
    });
   

});

//[tempTag]move to threads page
router.get("/getThreads",(req,res)=>{               
    Thread.findAll().then(threads => {
        res.send(threads);
    });
});



router.get("/getAll",(req,res)=>{
    let threadId = 1;

    connection.query("select * from getComments(?)",{replacements: [threadId] }).then(result => {
        let response = [];
        console.log( result)
        result[0].forEach(el => {

            if(el.groupId === null){
                response.push(el);

            }else if(response.length){
                let lastAdded = response[response.length-1];
                if(el.groupId === lastAdded.id){
                    if(lastAdded.replies === undefined){ lastAdded.replies = []; }
                    lastAdded.replies.push(el)
                }
            }
            
            
        });
        res.send(response);
      })
});



module.exports = router;

