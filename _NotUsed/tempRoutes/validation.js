//var path = require('path');

var express = require('express');
var router = express.Router();

const { check, validationResult } = require('express-validator/check');

var formValidation = ()=>
[
    check('username','user err').isLength({min:2,max:5}),
    check('password','pass err').custom( (val,{req,location,path})=>{
        if( val !==req.body.password2){
            //throw new Error("passwords don\'t match")
            return false;
        }
        return true;//no err
    } )
]


router.post('/post/test2',formValidation(),(req, res) =>{
    var err = validationResult(req);
    //console.log('err array: ',err.array());
    if(err.isEmpty()){
        res.send('no err');
    }else{
        res.send('err:<br />' + JSON.stringify(err.mapped()) + '<br />' + JSON.stringify(err.array()))
    }
});



module.exports = router;






/*
//deprecated
/*
app.post('/post/test',(req, res) =>{
    req.check('username','uname err').notEmpty().isLength({min:5,max:10});
    req.checkBody('password','password err').notEmpty().equals(req.body.password2)
    req.checkBody('password2','password2 err').notEmpty();
    var err = req.validationErrors();
    if(err){
        var errors = err.reduce( (acc,value)=>{
            acc[value.param] = value.msg;
            return acc;
        },{});
        console.log('err: ',err)
        console.log('errorserr: ',errors)
    }

    res.send(JSON.stringify(req.body) + '<br />' + JSON.stringify(errors) );
});
*/