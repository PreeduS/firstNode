const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')

//const connection = require('../../Models').connection;
const User = require('../../Models').User;





router.get("/register",(req,res)=>{ 

    //rem, check if user exists


    bcrypt.genSalt(10, (err, salt)=>{
        bcrypt.hash(newUser.password, salt, (err, hash)=>{
            let passwordhash = hash

            User.create({
                username: 'uname',
                password: passwordhash,
                email: 'unamemail'
            }).then((result)=>{
                res.send('user added: '+ result.get())

            }).catch(e=>{
                console.log('err: ',e)
            });



        });
    });




   
});