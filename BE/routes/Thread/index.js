const fs = require('fs');
const path = require('path');
const express = require('express');
const router = express.Router();

const connection = require('../../Models').connection;
//models
const Comment = require('../../Models').Comment;
const Thread = require('../../Models').Thread;
//repo
const repo = rootRequire('BE/repos/Thread');

connection.sync({force: false}).then(() => {});

router.get("/getComments",(req,res)=>{
    Comment.findAll().then(c => {
        res.json(c);
    });
});

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
    }).catch(err =>{
        return res.status(400).send(err.errors);//&.message //check later
    });
   
});


router.get("/getAll",(req,res)=>{
    let threadId = 1;  //temp ---------
    connection.query("select * from getComments(?)",{replacements: [threadId] }).then(result => {
        let response = repo.getAll(result[0]);
        res.send(response);
      });
});

router.post('/addReply',  async(req, res) =>{
    let content = req.body.content;
    let replyTo = req.body.replyTo;
    let threadId = req.body.threadId;
    let userId = 1; //---------------session later
 

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