const getCommentsStructure = result =>{
    let response = [];
    let repliesArr = [];
    let lastAdded = null;
    result.forEach(el => {

        if(el.groupId === null){
            response.push(el);
            repliesArr = [];

        }else if(response.length){
            lastAdded = response[response.length-1];
            if(el.groupId === lastAdded.id){          
                repliesArr = [...repliesArr,el];              
                lastAdded.replies = repliesArr;
            }
        }
        
        
    });
    return response;
}

module.exports = getCommentsStructure;