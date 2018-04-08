import {actionTypes} from '../actionTypes'
import services from '~/commons/services';

export const logout = dispatch =>{
    dispatch({ type: actionTypes.logout+'_PENDING'} );

    services.logout().then( result =>{           
        dispatch({ type: actionTypes.logout+'_FULFILLED'} );
    }).catch(error => {
        dispatch({ type: actionTypes.logout+'_REJECTED'} );
    });  

};