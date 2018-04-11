const path = require('path');

const routes_noDB = app =>{
    let pr = '/api';
    app.use(pr + '/Thread/getAll', (req, res) =>{
        const getCommentsStructure = rootRequire('BE/repos/Thread/getCommentsStructure');
        const commentsMockup = require('./routes/Thread/Mockups/CommentsSelect.json');

        res.send(getCommentsStructure(commentsMockup));
    } );
}

module.exports = app =>{

    if(process.env.NO_DB !== undefined){
        routes_noDB(app);
    }

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