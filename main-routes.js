const path = require('path');

module.exports = (app)=>{
    //require('./routes')(app);

    //temp    
    let pr = '/temp'; //be prefix

    app.use(pr+"/prefix",  require('./tempRoutes/prefix') );
    app.use(pr+'/session', require('./tempRoutes/session') );
    app.use(pr+'/files',   require('./tempRoutes/files') );
    app.use(pr+'/cookies', require('./tempRoutes/cookies') );
    app.use(pr+'/validation', require('./tempRoutes/validation') );
    app.use(pr+'/db', require('./tempRoutes/db') );
    app.use(pr+'/u', require('./tempRoutes/users') );
    app.use(pr+'/other', require('./tempRoutes/other') );

    //edit later
    pr = '/api';

    app.use(pr+"/Thread",  require('./routes/Thread') );
    app.use(pr+"/Threads",  require('./routes/Threads') );


    app.get(pr+'/*',(req, res)=>{
        res.status(404).send('404');
    });

    //fe route
    app.get('*',(req, res)=>{
        res.sendFile(path.resolve(__dirname, 'FE', 'build', 'index.html'))
    });
}