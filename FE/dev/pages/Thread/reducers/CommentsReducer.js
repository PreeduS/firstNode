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

//status state for comments/replies
const getUpdatedStatusComment = ({stateComments, commentId, newStatus, textareaValue}) => {
    let state = {
        ...stateComments,
        [commentId]:{
            ...stateComments[commentId],
            status: newStatus
        }
    };
    if(textareaValue !== null){
        state[commentId].value = textareaValue;
    }

    return state;

}


const getUpdatedStatusCommentGroup = ({stateCommentGroup, commentGroupId, newStatus}) => {
    let state = {
        ...stateCommentGroup,
        [commentGroupId]:{
            ...stateCommentGroup[commentGroupId],
            commentGroupStatus: newStatus
        }
    }

    return state;
}

//set what comment/reply textarea is visible
const toggleActiveTextarea = id => state =>{
    //toggle if set, else set as true
    let isActive = state[id] !== undefined ? !state[id].active : true;

    let newState = {
        ...state,
        [id]:{
            ...state[id],
            active: isActive
        }

    };


    return newState;
}

//reducer
const CommentsReducer =( state = initialState.comments, action) =>{

    switch(action.type) {
        //addComment
        case actionTypes.addComment + '_PENDING':{
            let newStatusComment = getUpdatedStatusComment({
                stateComments: state.status.comments, commentId: -1, newStatus: 'pending', textareaValue: null
            });
            return{
                ...state,
                status: {
                    ...state.status,
                    comments: newStatusComment
                }
            };
        }
        case actionTypes.addComment + '_FULFILLED':{
            let newStatusComment = getUpdatedStatusComment({
                stateComments: state.status.comments, commentId: -1, newStatus: 'recent', textareaValue: ''
            });
            return{
                ...state,
                data:[
                    action.payload,
                    ...state.data
                ],
                status: {
                    ...state.status,
                    comments: newStatusComment
                }
            };
        }
        case actionTypes.addComment + '_REJECTED':{
            let newStatusComment = getUpdatedStatusComment({
                stateComments: state.status.comments, commentId: -1, newStatus: 'error', textareaValue: null
            });
            return{
                ...state,
                status: {
                    ...state.status,
                    comments: newStatusComment
                }
            };
        }
        //loadComments
        case actionTypes.loadComments + '_PENDING':
            return{
                ...state
            };

        case actionTypes.loadComments + '_FULFILLED':
            return{
                ...state,
                data:[
                    ...action.payload
                ]
            };

        //loadMoreComments
        case actionTypes.loadMoreComments + '_PENDING':{      
            return{
                ...state,
                status:{
                    ...state.status,
                    loadMoreComments: {
                        ...state.status.loadMoreComments,
                        status: 'pending'
                    }
                }
            };
        }
        case actionTypes.loadMoreComments + '_FULFILLED':
            return{
                ...state,
                status:{
                    ...state.status,
                    loadMoreComments: {
                        ...state.status.loadMoreComments,
                        status: null
                    }
                },
                data:[
                    ...state.data,
                    ...action.payload
                ]
            };
        case actionTypes.loadMoreComments + '_REJECTED':
            return{
                ...state,
                status:{
                    ...state.status,
                    loadMoreComments: {
                        ...state.status.loadMoreComments,
                        status: 'error'
                    }
                },
                data:[
                    ...state.data,
                    ...action.payload
                ]
            };
        //loadMoreReplies
        case actionTypes.loadMoreReplies + '_PENDING':{
            let newStatusCommentGroup = getUpdatedStatusCommentGroup({
                stateCommentGroup: state.status.comments, commentGroupId: action.payload.commentGroupId, newStatus: 'pending'
            });
            return{
                ...state,
                status: {
                    ...state.status,
                    comments: newStatusCommentGroup
                }
            };
        }
        case actionTypes.loadMoreReplies + '_FULFILLED':{
            let newData = loadMoreReplies(state.data, action.payload.data, action.payload.commentGroupId);
            let newStatusCommentGroup = getUpdatedStatusCommentGroup({
                stateCommentGroup: state.status.comments, commentGroupId: action.payload.commentGroupId, newStatus: null
            });
            return{
                ...state,
                data: newData,
                status: {
                    ...state.status,
                    comments: newStatusCommentGroup
                }
            };
        }
        case actionTypes.loadMoreReplies + '_REJECTED':{
            let newStatusCommentGroup = getUpdatedStatusCommentGroup({
                stateCommentGroup: state.status.comments, commentGroupId: action.payload.commentGroupId, newStatus: 'error'
            });
            return{
                ...state,
                status: {
                    ...state.status,
                    comments: newStatusCommentGroup
                }
            };
        }

        //addReply
        case actionTypes.addReply + '_PENDING':{
            let {replyTo} = action.payload;
            let newStatusComment = getUpdatedStatusComment({
                stateComments: state.status.comments, commentId: replyTo, newStatus: 'pending', textareaValue: null
            });
            return{
                ...state,
                status: {
                    ...state.status,
                    comments: newStatusComment
                }

            };
        }
        case actionTypes.addReply + '_FULFILLED':{
            let {replyTo} = action.payload;
            //rem, recent for the new id, not replyTo, new line
            let newStatusComment = getUpdatedStatusComment({
                stateComments: state.status.comments, commentId: replyTo, newStatus: null, textareaValue: ''
            });
            let newData = addReply(state.data, action.payload);

            let newReplyId = action.payload.id;
            newStatusComment = getUpdatedStatusComment({
                stateComments: newStatusComment, commentId: newReplyId, newStatus: 'recent', textareaValue: null
            });

            return {
                ...state,
                data: [...newData],
                status: {
                    ...state.status,
                    comments: newStatusComment
                }


            };
        }
        case actionTypes.addReply + '_REJECTED':{
            let {replyTo} = action.payload;
            let newStatusComment = getUpdatedStatusComment({
                stateComments: state.status.comments, commentId: replyTo, newStatus: 'error', textareaValue: null
            });
            return {
                ...state,
                status: {
                    ...state.status,
                    comments: newStatusComment
                }

            };
        }

        //textarea
        case actionTypes.updateTextarea:{
            let {id, value} = action.payload;

            return {
                ...state,
                status: {
                    ...state.status,
                    comments:{
                        ...state.status.comments,
                        [id]: {
                            ...state.status[id],
                            value
                        }
                    }
                }
            };
        }

        case actionTypes.toggleActiveTextarea:{
            let newActiveTextarea = toggleActiveTextarea(action.payload.id)(state.activeTextarea);
            return {
                ...state,
                activeTextarea: newActiveTextarea
            }
        }
        case actionTypes.setActiveTextarea:{
            let {id, isActive} = action.payload;
            return {
                ...state,
                activeTextarea: {
                    ...state.activeTextarea,
                    [id]:{
                        ...state.activeTextarea[id],
                        active: isActive
                    }
                },

            }
        }
    }
    return state;
}

export default CommentsReducer;