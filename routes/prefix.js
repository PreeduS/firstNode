var fs = require('fs');
var path = require('path');

module.exports = (app, router)=>{

    app.use('/prefix',router);

    router.get("/page1",(req,res)=>{ res.send(req.path); })
    router.get("/page2",(req,res)=>{ res.send(req.path); })

    


}