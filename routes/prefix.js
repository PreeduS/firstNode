var fs = require('fs');
var path = require('path');

var express = require('express');
var router = express.Router();

router.get("/page1",(req,res)=>{ res.send(req.path); })
router.get("/page2",(req,res)=>{ res.send(req.path); })

module.exports = router;

