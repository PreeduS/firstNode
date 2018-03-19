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


