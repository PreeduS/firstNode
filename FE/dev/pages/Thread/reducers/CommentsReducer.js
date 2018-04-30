import actionTypes from '../actionTypes';
import initialState from './initialState'


const addReply = (stateData, reply) => {
    let commentIndex = stateData.findIndex(cg => cg.id === reply.groupId);
    if(commentIndex === -1){
        throw new Error('Failed to find commentgroup id: '+ reply.groupId)
    }

    let newStateData = [...stateData];
    newStateData[commentIndex] = {
        ...newStateData[commentIndex]
    }

    newStateData[commentIndex].replies = (newStateData[commentIndex].replies === undefined) ?
    [reply] : [ ...newStateData[commentIndex].replies, reply];

    return newStateData;
}

const loadMoreReplies = (stateData, newReplies , commentGroupId) =>{
    let commentIndex = stateData.findIndex(cg => cg.id === commentGroupId);
    if(commentIndex === -1){
        throw new Error('Failed to find commentgroup id: '+ commentGroupId)
    }
    let newStateData = [...stateData];
    newStateData[commentIndex] = {
        ...newStateData[commentIndex]
    }

    newStateData[commentIndex].replies = (newStateData[commentIndex].replies === undefined) ?
    newReplies : [
        ...newStateData[commentIndex].replies,
        ...newReplies
    ];

    return newStateData;

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

        //loadMoreComments
        case actionTypes.loadMoreComments + '_PENDING':
            return{
                ...state,
                pending: true
            };
        case actionTypes.loadMoreComments + '_FULFILLED':
            return{
                ...state,
                pending: false,
                data:[
                    ...state.data,
                    ...action.payload
                ]
            };
        //loadMoreReplies
        case actionTypes.loadMoreReplies + '_PENDING':
            return{
                ...state,
                pending: true
            };
        case actionTypes.loadMoreReplies + '_FULFILLED':{
            let newData = loadMoreReplies(state.data, action.payload.data, action.payload.commentGroupId);
            return{
                ...state,
                pending: true,
                data: newData
            };
        }

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