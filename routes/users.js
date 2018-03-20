var express = require('express');
var router = express.Router();

const User = require('../models/user');
const bcrypt = require('bcryptjs')
const passport = require('passport');

//temp get
router.get("/register",(req,res)=>{ 

    let r = Math.random().toFixed(2);
    let newUser = new User({
        username: `user1`,
        password: `password`,
        email: `email ${r}`     
    });

    bcrypt.genSalt(10, (err, salt)=>{
        bcrypt.hash(newUser.password, salt, (err, hash)=>{
            newUser.password = hash;
            newUser.save(err=>{
                res.send('user added')
            });
        });
    });

   
});
router.get("/login",(req, res, next)=>{ 
    req.body.username = 'user1';
    req.body.password = 'password';
    //let r = passport.authenticate('local',/*{successRedirect:'/',failureRedirect:'/'}*/)(req, res, next);
    passport.authenticate('local',(err, user, info)=>{

        /*if (err) { return next(err); }
        if (!user) { return res.redirect('/login'); }
        req.logIn(user, function(err) {
            if (err) { return next(err); }
            return res.redirect('/users/' + user.username);
        });*/


        if (err) { return next(err); }
        if (!user) {  return res.send('[!user] - '+ info.message); }
        req.logIn(user, err=> {
            if (err) { console.log('login err: ',err); return res.send('login err'); }
            req.login(user, err=>{
                if(err){ return res.send('login err: '+err); }
                res.send('logged in as: ' + user)
            });
            
            
            //return res.redirect('/users/' + user.username);
        })

    })(req, res, next);
  
    console.log('----------req.user', req.user); //stored here
    
});


module.exports = router;

