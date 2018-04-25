import actionTypes from '../actionTypes';
import initialState from './initialState'

const addReply = (_data, reply) => {            //rem, edit here, state is mutated
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


const getUpdatedStatus = ({statusData, id, newStatus, textareaValue}) => {
    let data = {...statusData};
    data[id] = {
        ...data[id],
        id,
        status: newStatus
    }

    if(textareaValue !== null){
        data[id].value = textareaValue;
    }

    return data;

}


const CommentsReducer =( state = initialState.comments, action) =>{

    switch(action.type) {
        //addComment
        case actionTypes.addComment + '_PENDING':{
            let newStatus = getUpdatedStatus({
                statusData: state.status, id: -1, newStatus: 'pending', textareaValue: null
            });
            return{
                ...state,
                pending: true,
                status: newStatus
            };
        }
        case actionTypes.addComment + '_FULFILLED':{
            let newStatus = getUpdatedStatus({
                statusData: state.status, id: -1, newStatus: 'recent', textareaValue: ''
            });
            return{
                ...state,
                pending: false,
                data:[
                    action.payload,
                    ...state.data
                ],
                status: newStatus
            };
        }
        case actionTypes.addComment + '_REJECTED':{
            let newStatus = getUpdatedStatus({
                statusData: state.status, id: -1, newStatus: 'error', textareaValue: null
            });
            return{
                ...state,
                pending: false,
                status: newStatus
            };
        }
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
        case actionTypes.addReply + '_PENDING':{
            let {replyTo} = action.payload;
            let newStatus = getUpdatedStatus({
                statusData: state.status, id: replyTo, newStatus: 'pending', textareaValue: null
            });
            return{
                ...state,
                pending: true,
                status: newStatus

            };
        }
        case actionTypes.addReply + '_FULFILLED':{
            let {replyTo} = action.payload;
            //rem, recent for the new id, not replyTo, new line
            let newStatus = getUpdatedStatus({
                statusData: state.status, id: replyTo, newStatus: 'recent', textareaValue: ''
            });
            let newData = addReply(state.data, action.payload);
            return {
                ...state,
                pending: false,
                data: [...newData],
                status: newStatus


            };
        }
        case actionTypes.addReply + '_REJECTED':{
            let {replyTo} = action.payload;
            let newStatus = getUpdatedStatus({
                statusData: state.status, id: replyTo, newStatus: 'error', textareaValue: null
            });
            return {
                ...state,
                pending: false,
                status: newStatus

            };
        }
        case actionTypes.updateTextarea:{
            let {id, value} = action.payload;

            return {
                ...state,
                status: {
                    ...state.status,
                    [id]: {
                        ...state.status[id],
                        value
                    }
                }
            };
        }


    }
    return state;
}

export default CommentsReducer;