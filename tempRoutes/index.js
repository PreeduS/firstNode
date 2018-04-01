
module.exports = (app)=>{

    app.get("/", (req, res)=>{
        //req.query
        //req.params
        //req.body      //needs middleware

        //res.send(404,"not found");
        //res.status(404);          //res.status(404).send("");    
        //res.render();             //needs middleware  //app.set('view engine','ejs'); app.set('views','viewPath...');
        //res.json();
        
        res.send({page:'on index'});
    });


}