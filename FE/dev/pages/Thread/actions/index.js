import actionTypes from '../actionTypes'
import axios from 'axios';


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


//addComment & addReply - similar
//wip
export const addComment = comment => dispatch =>{
    console.log('comment : ',comment)
    dispatch( {type: actionTypes.addComment + '_PENDING'} );
    axios.post('/api/Thread/addComment',{
        content: comment.content,
        threadId: comment.threadId
    }).then( result =>{ 
        //let {id, content, replyTo, threadId, userId, groupId} = result.data ;

        dispatch({ 
            type: actionTypes.addComment+'_FULFILLED',
            payload: result.data
        });

    }).catch(error =>
        dispatch({ type: actionTypes.addComment+'_REJECTED'}) 
    );


}


export const addReply = reply => dispatch =>{
    dispatch({
        type: actionTypes.addReply + '_PENDING',
        payload: {replyTo: reply.replyTo}
    });

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
        dispatch({
            type: actionTypes.addReply+'_REJECTED',
            payload: {replyTo: reply.replyTo}
        }) 
    );

};


export const setActiveTextarea = id => ({
    type: actionTypes.setActiveTextarea,
    payload: id
})