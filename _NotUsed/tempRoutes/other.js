var express = require('express');
var router = express.Router();



router.get('/user/:param1/:param2', (req, res)=>{
    res.send(
        'params: ' + JSON.stringify(req.params) + '<br />' +
        'query: ' + JSON.stringify(req.query) 
    );
});  

router.get('/user/:param1?/', (req, res)=>{
    res.send(
        'params: ' + JSON.stringify(req.params)
    );
});  


router.get("/event",(req, res)=>{
    var events = require('events');
    var util = require('util');
    var myEmitter = new events.EventEmitter();

    myEmitter.on("someEvent", e=>{
        console.log('someEvent: ',e)
    });

    myEmitter.emit('someEvent',"data A");
    myEmitter.emit('someEvent',"data B");

    var Child = function(name){
        this.name=name;
    }
    util.inherits(Child, events.EventEmitter);
    var list = [new Child("first"), new Child("second"), new Child("third")];
    list.forEach( child =>
        child.on("commonEv",e=> console.log( child.name, e) ) 
    );
    
    list[0].emit("commonEv",0);
    list[2].emit("commonEv",2);

    res.send(null);
});


module.exports = router;

