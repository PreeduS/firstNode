const LocalStrategy = require('passport-local').Strategy;
const User = require('../modelsTemp/user');
const bcrypt = require('bcryptjs');

//mongoDB LocalStrategy, not used, temp

module.exports = (passport)=>{
    passport.use(new LocalStrategy((username, password, done)=>{
        User.findOne({username:username},(err, user)=>{
            if(err){return done(err);} //return done(err);
            if(!user){
                return done(null, false, {message:"No user found"})
            }
            bcrypt.compare(password, user.password, (err, isMatch)=>{
                if(err){throw err;return;}
                if(isMatch){
                    return done(null, user);
                }else{
                    return done(null, false, {message: 'Wrond password'});
                }
            });

        });
    }));

    passport.serializeUser(function(user, done) {
        done(null, user.id);
      });
      
    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });



};