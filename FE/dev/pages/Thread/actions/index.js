import actionTypes from '../actionTypes'
import axios from 'Axios';


export const loadComments = () => dispatch =>{
    dispatch( {type: actionTypes.loadComments + '_PENDING'} );

    axios.get('/api/thread/getall').then( result =>{           
        dispatch({
            type: actionTypes.loadComments + '_FULFILLED',
            payload: result.data 
        });

    }).catch( error => 
       dispatch( {type: actionTypes.loadComments + '_REJECTED'} )
    );

};

export const addComment = comment =>({
    type: actionTypes.addComment,
    payload: comment
});
export const _addComment = reply => dispatch =>{
    dispatch( {type: actionTypes.addComment + '_PENDING'} );
    //...
}


export const addReply = reply => dispatch =>{
    dispatch( {type: actionTypes.addReply + '_PENDING'} );

    axios.post('/api/Thread/addReply',{
        content: reply.content,
        replyTo: reply.replyTo,
        threadId: reply.threadId
    }).then( result =>{ 
         
        dispatch({ 
            type: actionTypes.addReply+'_FULFILLED',
            payload: result.data 
        }); 

    }).catch(error =>
        dispatch({ type: actionTypes.addReply+'_REJECTED'}) 
    );
    
 
};


export const setActiveTextarea = id => ({
    type: actionTypes.setActiveTextarea,
    payload: id
})