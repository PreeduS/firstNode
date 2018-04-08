
import {initialState} from './initialState';
import {actionTypes} from '../actionTypes';


const UserReducer = (state = initialState.user, action) =>{
    switch(action.type){
        case actionTypes.login:
            return{
                ...state,
                username: action.payload
            };
        case actionTypes.logout + '_PENDING':
            return{
                ...state,
                username: null,
                logoutPending: true
            };
        case actionTypes.logout + '_FULFILLED':
        case actionTypes.logout + '_REJECTED':
            return{
                ...state,
                username: null,
                logoutPending: false
            };            

    }
    return state;
};
export default UserReducer;