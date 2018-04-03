const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const passport = require('passport');

//const connection = require('../../Models').connection;
const User = require('../../Models').User;


const isLoggedIn = async(username) =>{
    let u = await User.findOne({where: { username: username } });
    return u.username;  //.length
};


router.get("/register",(req,res)=>{ 

    //rem, check if user exists
    //await const loggedIn = isLoggedIn()

    let newUser = {
        username: 'uname4',
        password: '123456',
        email: 'unamemail4'
    }

    bcrypt.genSalt(10, (err, salt)=>{
        bcrypt.hash(newUser.password, salt, (err, hash)=>{

            User.create({
                username: newUser.username,
                password: hash,
                email: newUser.email
            }).then(result=>{
                res.send('user added: '+ JSON.stringify(result.get()) )

            }).catch(e=>{
                res.send('err: '+ e )
            });


        });
    });




   
});

router.get("/login",(req,res,next)=>{ 


    //User
    req.body.username = 'uname4';
    req.body.password = '123456';

    if(req.user){ //stored here
        return res.send('Already logged in as '+req.user); 
    }

    passport.authenticate('local',(err, user, info)=>{

        if (err) { return next(err); }
        if (!user) {  return res.send('[!user] - '+ info.message); }
        req.logIn(user, err=> {
            if (err) { console.log('login err: ',err); return res.send('login err'); }            
            res.send('logged in as: ' + user); 
           
        });

    })(req, res, next);


});

router.get("/logout",(req, res, next)=>{ 
    req.logout();
    
    req.session.destroy(err=>{
        if(!err){ 
            res.clearCookie('sessionName',{path:'/'}); 
            return res.send('Logged out...')
        }
        res.send('Err Logging out...')
    })
    
});


module.exports = router;