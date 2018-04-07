const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const passport = require('passport');

//const connection = require('../../Models').connection;
const User = require('../../Models').User;


const userExists = async(username) =>{
    let u = await User.findOne({where: { username: username } });
    return u!==null;
    
};
router.get("/userExists", async(req,res)=>{
    //temp
    const sleep = time => new Promise( resolve => 
        setTimeout(() => { resolve(); }, time)
    );
    await sleep(1);  


    let username = req.query.username;
    let exists = await userExists(username);
    res.send(exists);
});

router.get("/register", async(req,res)=>{ 
    

    let newUser = {
        username: 'uname4',
        password: '123456',
        email: 'unamemail4'
    }

    let exists = await userExists(newUser.username);
    if(exists){
        return res.status(400).send('Username is taken');
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
                res.status(500).send({error:e})
            });


        });
    });




   
});

router.post("/login",(req,res,next)=>{ 

    //User
    //req.body.username = 'uname4';
    //req.body.password = '123456';

    if(req.user){ //stored here
        return res.status(400).send({error:'Already logged in as '+req.user}); 
    }

    passport.authenticate('local',(err, user, info)=>{

        if (err) { return next(err); }
        if (!user) {  return res.status(400).send({error: info.message}) }
        req.logIn(user, err=> {
            if (err) { return res.status(400).send({error:err}); }            
            res.send('Logged in as: ' + user.username); 
           
        });

    })(req, res, next);


});

router.get("/logout",(req, res, next)=>{ 
    req.logout();
    
    req.session.destroy(err=>{
        if(!err){ 
            res.clearCookie('sessionName',{path:'/'}); 
            return res.json({logout:true});
        }
        res.status(500).json({logout:false});
    })
    
});


module.exports = router;