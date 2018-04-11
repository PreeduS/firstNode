const fs = require('fs');
const path = require('path');
const express = require('express');
const router = express.Router();

const repo = rootRequire('BE/repos/Thread');

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
const connection = require('../../Models').connection;

//models
const Comment = require('../../Models').Comment;
const Thread = require('../../Models').Thread;





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

router.get("/getAll",(req,res)=>{
    let threadId = 1;

    
/*
    const getCommentsStructure = result =>{
        let response = [];
        let repliesArr = [];
        let lastAdded = null;
        result.forEach(el => {

            if(el.groupId === null){
                response.push(el);
                repliesArr = [];

            }else if(response.length){
                lastAdded = response[response.length-1];
                if(el.groupId === lastAdded.id){
                    //if(lastAdded.replies === undefined){ lastAdded.replies = []; }//lastAdded.replies.push(el);
                    //repliesArr.push(el);              
                    repliesArr = [...repliesArr,el];              
                    lastAdded.replies = repliesArr;
                }//else{
                   // repliesArr = [];
                //}
            }
            
            
        });
        return response;
    }*/
    /*[tempTag]*/ //res.send(   getCommentsStructure(require('./Mockups/CommentsSelect.json'))    ) ;return; 

    connection.query("select * from getComments(?)",{replacements: [threadId] }).then(result => {
      
       
        //let response = getCommentsStructure(result[0]);
        let response = repo.getAll(result[0]);
        
        res.send(response);
      })
});

router.post('/addReply',  async(req, res) =>{
    let content = req.body.content;
    let replyTo = req.body.replyTo;
    let threadId = req.body.threadId;
    let userId = 1; //session later
 

    let result = await Comment.findOne({where: {id: replyTo,threadId: threadId}})
    .catch(err =>{
        return res.status(400).send(err.errors);
    });
    
    let groupId = result.groupId === null ? result.id : result.groupId;
 
    result = await Comment.create({
        content: content,
        replyTo: replyTo,
        groupId: groupId,
        threadId: 1,
        nrReplies: 0,
        userId: userId
    })
    .catch(err =>{
       
        return res.status(400).send(err.errors);
       
    });

   

    res.send(result);

});

module.exports = router;

