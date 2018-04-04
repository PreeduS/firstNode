
//import {FETCH_TODOS_PENDING, FETCH_TODOS_SUCCESS, ADD_TODO , DELETE_TODO} from '../actionTypes'

export const addTodoAction = value =>(
    {   type: ADD_TODO,
        payload:value
    }
);