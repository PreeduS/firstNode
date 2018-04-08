import React from 'react';
import {connect} from 'react-redux';

import UserSection from './containers/UserSection'; 

import UserReducer from '~/commons/reducers/UserReducer';

import LoaderHoc from '~/commons/components/LoaderHoc';
const UserHeaderHoc = LoaderHoc(UserSection);


class UserHeader extends React.Component {
    render(){
        const {logoutPending} = this.props.user;
        return <UserHeaderHoc loading = {logoutPending}/>;
    }
}

const mapStateToProps = state=>( {
    user: state.UserReducer
});

export default connect(mapStateToProps, null)(UserHeader);
