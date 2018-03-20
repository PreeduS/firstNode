
module.exports = (app)=>{
    require('./routes')(app);
    app.use("/prefix",  require('./routes/prefix') );
    app.use('/session', require('./routes/session') );
    app.use('/files',   require('./routes/files') );
    app.use('/cookies', require('./routes/cookies') );
    app.use('/validation', require('./routes/validation') );
    app.use('/db', require('./routes/db') );
    app.use('/u', require('./routes/users') );
}