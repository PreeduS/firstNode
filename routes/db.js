var express = require('express');
var router = express.Router();

const Article = require('../models/article');

router.get("/addArticle",(req,res)=>{ 
    res.send(req.path); 
})

router.get("/findArticles",(req,res)=>{ 
    Article.find({},(err, articles)=>{
        if(err){ return res.send(err); }
        res.send('articles: '+articles)
    });
    //res.send(req.path); 
})


module.exports = router;

