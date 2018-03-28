const path = require('path');

module.exports = (app)=>{
    //require('./routes')(app);
    const pr = '/api'; //be prefix

    app.use(pr+"/prefix",  require('./routes/prefix') );
    app.use(pr+'/session', require('./routes/session') );
    app.use(pr+'/files',   require('./routes/files') );
    app.use(pr+'/cookies', require('./routes/cookies') );
    app.use(pr+'/validation', require('./routes/validation') );
    app.use(pr+'/db', require('./routes/db') );
    app.use(pr+'/u', require('./routes/users') );
    app.use(pr+'/other', require('./routes/other') );

    app.get(pr+'/*',(req, res)=>{
        res.status(404).send('404');
    });

    //fe route
    app.get('*',(req, res)=>{
        res.sendFile(path.resolve(__dirname, 'FE', 'build', 'index.html'))
    });
}