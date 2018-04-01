var fs = require('fs');
var path = require('path');

var express = require('express');
var router = express.Router();


//files add/copy
router.get("/addFile",(req,res)=>{
    const copyFrom = path.join( __dirname, '../prFiles','copyFrom.txt');    
    const copyTo = path.join( __dirname, '../prFiles','copyTo.txt');    
    
    var data = fs.readFile(copyFrom,'utf8',(err, data)=>{
        if(err){
            return res.status(404).send('file not found<br /> '+ err.message);
        }
        fs.exists(copyTo,exists =>{
            if(exists){
                return res.send('file already exists');
            }
            fs.writeFile(copyTo, data, err=>{
                if(err){
                    return res.status(500).send("something went wrong<br />"+err);
                }
                res.send('file copied');
                    
            });          
        });                           
    });
})


    
router.get("/getFile",(req, res)=>{
        const filePath = path.join( __dirname, '../prFiles','test.html');                  
        
        var _checkFIle = ()=>{
            var pCall = (resolve,reject)=>{
                fs.stat(filePath ,(err,stats) =>{
                    if(err){
                        return reject(err);        
                    }
                    resolve('no err');
                });
            }

            return new Promise(pCall).catch(err=>({err:err}))
        }
              
        var _sendFile = ()=>{
             var pCall = (resolve,reject)=>{
                res.sendFile(filePath,{},err=>{
                    if(err){
                        return reject('err sendFile: '+err+', code: '+ err.code);                
                    }
                    resolve('sendFile successfully');                   
                });
            }

            return new Promise(pCall).catch(err=>({err:err}))
        }
        

        var wrap = async()=>{
            var chFile = await _checkFIle();    
            if(chFile.err){ return res.send(chFile);}
            
            var sFile = await _sendFile();
            if(sFile.err){ return res.send(sFile);}
           
        }
        wrap();



    
});  

router.get("/delFile",(req,res)=>{ 
    const delCopy = path.join( __dirname, '../prFiles','copyTo.txt');    

    fs.unlink(delCopy, err=>{
        if(err){
            return res.send('err: ' + err.message);
        }
        res.send('deleted');
           
    });    
});


router.get('/mkdir',(req, res)=>{
    const dirPath = path.join( __dirname, '../prFiles','newDir');    
    fs.mkdir(dirPath, err=>{
        if(err){
            return res.send('mkdir err: '+err);
        }
        res.send('mkdir done');     
    });
});

router.get('/rmdir',(req, res)=>{
    const dirPath = path.join( __dirname, '../prFiles','newDir');    
    fs.rmdir(dirPath, err=>{ //not recursive
        if(err){
            return res.send('rmdir err: '+err);
        }
        res.send('rmdir done');
        
    });
});



module.exports = router;

