import actionTypes from '../actionTypes';
import initialState from './initialState'

const addReply = (_data, reply)=>{
    let comment; //where the reply is added
    let data = [..._data];
    //first search by group
    let commentGroup = data.find(cg => cg.id === reply.groupId);

    //second search by replyTo(double check)
    if(commentGroup.id === reply.replyTo ){
        comment = commentGroup;
    }else{
        comment = (commentGroup.replies.find(r => r.id === reply.replyTo) !== undefined) ?
        commentGroup : null;
    }

    //console.log('data ',data)
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
    return data;

}

const CommentsReducer =( state = initialState.comments, action) =>{

    switch(action.type) {
        //addComment
        case actionTypes.addComment + '_PENDING':
            return{
                ...state,
                pending: true
            };

        case actionTypes.addComment + '_FULFILLED':
            return{
                ...state,
                pending: false,
                data:[
                    action.payload,
                    ...state.data
                ]
            };

        //loadComments
        case actionTypes.loadComments + '_PENDING':
            return{
                ...state,
                pending: true
            };

        case actionTypes.loadComments + '_FULFILLED':
            return{
                ...state,
                pending: false,
                data:[
                    ...action.payload
                ]
            };

        //addReply
        case actionTypes.addReply + '_PENDING':
            return{
                ...state,
                pending: true
            };

        case actionTypes.addReply + '_FULFILLED':
            let newData = addReply(state.data, action.payload);
            return {
                ...state,
                pending: false,
                data: [...newData]

            };

    }
    return state;

}

export default CommentsReducer;