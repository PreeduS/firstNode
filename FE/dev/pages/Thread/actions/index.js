
//import {LOAD_COMMENTS, ADD_COMMENT} from '../actionTypes'

export const loadComments = comments =>(
    {
        type:'LOAD_COMMENTS',
        payload: comments
    }
);

export const addComment = comment =>(
    {
        type:'ADD_COMMENT',
        payload: comment
    }
)