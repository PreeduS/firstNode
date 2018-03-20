var express = require('express');
var router = express.Router();

const Article = require('../models/article');

router.get("/addArticle",(req,res)=>{ 
    let article = new Article();

    let r = Math.random().toFixed(2);
    article.title = `title ${r}`;
    article.author = `author ${r}`;
    article.body = `body ${r}`;

    article.save(err=>{
        if(err){
            return res.send('err: '+err); 
        }
        return res.send(`data ${r} added`);
    });
    
});

router.get("/findArticles",(req,res)=>{ 
    Article.find({},(err, articles)=>{
        if(err){ return res.send(err); }
       
        let r = articles.reduce((acc,val)=> {
            let del = `<a href="/db/deleteArticle/${val._id}">[d]</a>`;
            return acc + `title: ${val.title},  author: ${val.author}, body: ${val.body} ${del}<br />` 
        },'')
        res.send(r)
    });
    //res.send(req.path); 
});
router.get("/deleteArticle/:id",(req,res)=>{ 
    let id = req.params.id;
    Article.remove({_id:id},err=>{
        if(err){
            return res.send('err: '+err);
        }
        res.send(id + ' removed');
    });


});


module.exports = router;

/*
article.update({_id:"..."}, newObject,  err=>{...})
article.update({ _id: id }, { $set: { size: 'large' }}, callback);
*/