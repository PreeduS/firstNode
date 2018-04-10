import React from 'react';
import {connect} from 'react-redux';

import User from './components/User';

class Users extends React.Component{

    render(){
        let users = [1,2,3,4,5];

        return(
            <div>
                {users.length>0 && users.map(el => <User key = {el}/> ) }
            </div>
        );
    }
}

export default Users;