var fs = require('fs');
var path = require('path');
const rootPath = require('../config').rootPath;

var express = require('express');
var router = express.Router();


//files add/copy
router.get("/addFile",(req,res)=>{

    
    var data = fs.readFile('./files/test.txt','utf8',(err, data)=>{
        if(err){
            res.status(404).send('file not found<br /> '+ err.message);
        }else{
            fs.exists('./files/testCopy.txt',exists =>{
                if(exists){
                    res.send('file already exists');
                }else{
                    fs.writeFile('./files/testCopy.txt',data, err=>{
                            if(err){
                                res.status(500).send("something went wrong<br />"+err);
                            }else{
                                res.send('file copied');
                            }
                    });//
                }
            });//
            
        }
        
    });//
})


    

router.get("/getFile",(req, res)=>{

        var filePath = path.join(rootPath, '/prFiles','test.html');                      
       /*
        fs.stat(filePath ,(err,stats) =>{           //stat: provide info about file
            if(err){
                res.send('err: '+err + ', code: '+ err.code)
            }else{
               
                res.sendFile(filePath,{},err=>{
                    if(err){
                       res.send('err sendFile: '+err+', code: '+ err.code);                
                    }else{
                        console.log('sendFile successfully')
                    }
                });
            }
        });
        */
        //res.sendFile("/test.html", {root: path.join(__dirname, '../files')} );
        //console.log( fs.statSync('./files/test.html').isFile() );
        
        var _checkFIle = ()=>{
            var pCall = (resolve,reject)=>{
                fs.stat(filePath ,(err,stats) =>{
                    if(err){
                        return reject(err.code);        
                    }
                    resolve( 'no err');
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
    fs.unlink('./files/testCopy.txt',err=>{
        if(err){
            res.send('err: <br/>' + err.message);
        }else{
            res.send('deleted');
        }
        

    });
    
});


router.get("/getFile",(req, res)=>{
    console.log( fs.statSync('./files/test.html').isFile() );
    
    //res.sendFile("/test.txt", {root: path.join(__dirname, '../files')} );
    res.sendFile("/test.html", {root: path.join(__dirname, '../files')} );
});

router.get('/mkdir',()=>{
    fs.mkdir('../files/newDir',(err)=>{
        if(err){
            res.send('mkdir err');
        }else{
            res.send('mkdir done');
        }
    })
});
router.get('/rmdir',()=>{
    //not recursive
    fs.rmdir('../files/newDir',(err)=>{
        if(err){
            res.send('rmdir err');
        }else{
            res.send('rmdir done');
        }
    });
});



module.exports = router;





        /*
        var readFile = new Promise( (resolve, reject) =>{
            fs.readFile('./files/test.txt','utf8',(err, data)=>{
                if(err){
                    reject(err);
                }else{
                    resolve(data);
                }
            });
        });

        var writeFile = new Promise( (resolve, reject) =>{
            fs.writeFile('./files/testCopy.txt','data', err=>{
                if(err){
                    reject(err);
                }else{
                    resolve('data');
                }
           });            
        });


        readFile.then(resolve=>{
            return writeFile;
        },err=>{
            res.status(404).send('file not found<br /> '+ err.message);
        })
        .then(resolve=>{
            res.send('file copied');
        },err=>{
            res.status(500).send("something went wrong<br />"+err);
        })
        .catch(err=>{
            console.log('catch err');
        })
        */