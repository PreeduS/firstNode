import actionTypes from '../actionTypes'
import services from '../services';


const generalError = type => dispatch => error =>
    dispatch({
        type: type + '_REJECTED',
        payload: error
    });

export const loadComments = threadId => dispatch =>{
    dispatch( {type: actionTypes.loadComments + '_PENDING'} );

    services.loadComments(threadId).then( result =>{
        dispatch({
            type: actionTypes.loadComments + '_FULFILLED',
            payload: result.data
        });

    }).catch( generalError(actionTypes.loadComments)(dispatch) )
};

export const loadMoreComments = (threadId, lastId) => dispatch => {
    dispatch( {type: actionTypes.loadMoreComments + '_PENDING'} );

    services.loadMoreComments(threadId, lastId).then( result =>{           
        dispatch({
            type: actionTypes.loadMoreComments + '_FULFILLED',
            payload: result.data
        });

    }).catch( generalError(actionTypes.loadMoreComments)(dispatch) )

};

//addComment & addReply - similar

export const addComment = comment => dispatch =>{
    console.log('comment : ',comment)
    dispatch( {type: actionTypes.addComment + '_PENDING'} );
    const {threadId, content} = comment;

    services.addComment(threadId, content).then( result =>{ 
        //let {id, content, replyTo, threadId, userId, groupId} = result.data ;
        dispatch({
            type: actionTypes.addComment+'_FULFILLED',
            payload: result.data
        });

    }).catch( generalError(actionTypes.addComment)(dispatch) )
}


export const addReply = reply => dispatch =>{
    const {threadId, content, replyTo} = reply;
    dispatch({
        type: actionTypes.addReply + '_PENDING',
        payload: {replyTo}
    });

    services.addReply(threadId, content, replyTo).then( result =>{ 
        dispatch({
            type: actionTypes.addReply+'_FULFILLED',
            payload: result.data
        });

    }).catch(error =>
        dispatch({
            type: actionTypes.addReply+'_REJECTED',
            payload: {replyTo}
        })
    );

};

export const updateTextarea = (id, value) => dispatch =>{
    dispatch({
        type: actionTypes.updateTextarea,
        payload: {id, value}
    });
};



export const setActiveTextarea = id => ({
    type: actionTypes.setActiveTextarea,
    payload: id
})