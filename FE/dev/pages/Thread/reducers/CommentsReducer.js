import actionTypes from '../actionTypes';

const addReply = (state, reply)=>{

    //.id === reply.groupId         //first search
    let commentGroup = state.find(cg=> cg.id === reply.groupId);


    //console.log('commentGroup ',commentGroup)
    let comment;
    if(commentGroup.id === reply.replyTo ){
        comment = commentGroup;
    }else{
        comment = (commentGroup.replies.find(r => r.id === reply.replyTo) !== undefined) ? 
        commentGroup : null;
    }

    //console.log('state ',state)
    //console.log('comment ',comment)
    //console.log('reply ',reply)


    if(comment === null) {
        throw new Error('Failed to find comment id: '+ reply.replyTo) 
    }

    if(comment.replies === undefined){
        comment.replies = [reply];
    }else{
        comment.replies = [
            reply,
            ...comment.replies
        ]
    }

}

const initialState = {
    comments:[]
}

const CommentsReducer =( state = initialState.comments, action) =>{

    switch(action.type) {
        case actionTypes.addComment:
            return[
                action.payload,
                ...state
            ];
            
        case actionTypes.loadComments + '_PENDING':
            return state;

        case actionTypes.loadComments + '_FULFILLED':
            return action.payload
  

        case actionTypes.addReply + '_FULFILLED':
            addReply(state,action.payload);
            return [...state];
            
    }
    return state;

}

export default CommentsReducer;