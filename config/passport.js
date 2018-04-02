const LocalStrategy = require('passport-local').Strategy;
const User = require('../Models').User;
const bcrypt = require('bcryptjs');


module.exports = (passport)=>{
    passport.use(new LocalStrategy((username, password, done)=>{

        Project.findOne({ where: {username: username} }).then(user => {
            console.log('user : ',user)
         
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


        }).catch(err=>{
            if(err){return done(err);} 
        });


    }));

    passport.serializeUser(function(user, done) {
        done(null, user.id);
      });
      
    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
        /*
        User.findOne({where: {id: id}}).success(function(user){
            done(null, user);
          }).error(function(err){
            done(err, null);
          });*/

    });



};