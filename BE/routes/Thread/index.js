const fs = require('fs');
const path = require('path');
const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const connection = require('../../Models').connection;
//models
const Comment = require('../../Models').Comment;
const Thread = require('../../Models').Thread;
//repo
const repo = rootRequire('BE/repos/Thread');

connection.sync({force: false}).then(() => {});

//move later
const getGeneralError = err => {
    console.log(err);
    return{error: {message: err.errors} };
}

//not used ? check later
/*
router.get("/getComments",(req,res)=>{
    Comment.findAll().then(c => {
        res.json(c);
    });
});
*/
router.post("/addComment",(req,res)=>{
    let content = req.body.content;
    Comment.create({
        content: content,
        replyTo: null,
        groupId: null,
        threadId: 1,
        userId: 1
    }).then((result, err)=>{
        res.json(result.get({plain:true})); 
    }).catch(err =>
        res.status(400).send(err.errors) //&.message //check later
    );
   
});

//getComments, change 'getAll' name
//rem add limit as param maybe
router.get("/getAll",(req,res)=>{
    let threadId = 1;  //temp ---------
    connection.query("select * from getComments(?)",{replacements: [threadId] }).then(result => {
        let response = repo.getAll(result[0]);
        res.send(response);
      }).catch(err =>
        res.status(400).send(err.errors)
    );
});

router.get("/loadMoreComments",(req,res)=>{
    let threadId = req.query.threadId; 
    let lastId = req.query.lastId; 
    connection.query("select * from getComments(?,?)",{replacements: [threadId, lastId] }).then(result => {
        let response = repo.getAll(result[0]);
        res.send(response);
      }).catch(err =>
        res.status(400).send(err.errors)
    );
});
router.get("/loadMoreReplies", async(req,res)=>{
    let threadId = req.query.threadId; 
    let commentGroupId = req.query.commentGroupId; 
    let lastReplyId = req.query.lastReplyId; 
    console.log('-------------------' )
    console.log('threadId : ',threadId)
    console.log('commentGroupId : ',commentGroupId)
    console.log('lastReplyId : ',lastReplyId)
    if(!lastReplyId){return res.status(400).send(null);}

    let result = await Comment.findAll({ where: {
        [Op.and]:[
            {groupId: commentGroupId },
            {id: {
                [Op.gt]: lastReplyId
            }}
        ]
    },order:[
        ['id','ASC']
    ], limit:2 })   
    .catch(err =>
       getGeneralError(err)
    );
    if(result.error){ return res.status(400).send(result.error); }
    res.send(result);
});

router.post('/addReply',  async(req, res) =>{
    let content = req.body.content;
    let replyTo = req.body.replyTo;
    let threadId = req.body.threadId;
    let userId = 1; //---------------session later
 

    let result = await Comment.findOne({where: {id: replyTo,threadId: threadId}})
    .catch(err =>
        getGeneralError(err)
    );
    if(result.error){ return res.status(400).send(result.error.message); }
        
    
        
    let groupId = result.groupId === null ? result.id : result.groupId;
 
    result = await Comment.create({
        content: content,
        replyTo: replyTo,
        groupId: groupId,
        threadId: 1,
        nrReplies: 0,
        userId: userId
    })
    .catch(err =>
        getGeneralError(err)
    );

    if(result.error){ return res.status(400).send(result.error.message); }
    res.send(result);

});

module.exports = router;



/*
router.get("/addComments",(req,res)=>{
    const commentsMockup = require('./Mockups/CommentsInsert.json');

    Comment.bulkCreate(commentsMockup)
    .then((result, err)=>{
        res.send(result); 
    }).catch(err=>{
        return res.send('catch err: '+err)
    });
   

});*/