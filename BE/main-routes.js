const path = require('path');

module.exports = (app)=>{
    //edit later
    let pr = '/api';

    app.use(pr+"/Thread",  require('./routes/Thread') );
    app.use(pr+"/Threads",  require('./routes/Threads') );
    app.use(pr+"/UserManager",  require('./routes/UserManager') );

    app.get(pr+'/*',(req, res)=>{
        res.status(404).send('404');
    });

    //fe route
    app.get('*',(req, res)=>{
        res.sendFile(path.resolve(__dirname, '../FE', 'build', 'index.html'))
    });
}