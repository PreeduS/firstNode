import {actionTypes} from '../actionTypes'

export const login = username =>(
    {
        type: actionTypes.login,
        payload: username
    }
);
