import React from 'react';
import {connect} from 'react-redux';
import styles from '../styles/UserSection.scss';

import Dropdown from '~/commons/components/Dropdown';
import LoginForm from '../components/LoginForm';

//reducers
import UserReducer from '~/commons/reducers/UserReducer';
//actions
import {logout} from '~/commons/actions/logout';
import {login} from '~/commons/actions/login';

class UserSection extends React.Component {
    constructor(){
        super();
        this.state = {
            showDropdown:false,
            preventClose: false
        }
        this.dropdownButtonContainerRef = React.createRef(); 

        this.toogleDropdown = this.toogleDropdown.bind(this);
        this.dropdownBlur = this.dropdownBlur.bind(this);
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.isPendingHandler = this.isPendingHandler.bind(this);
    }
    toogleDropdown(){
        if(this.state.preventClose){return;}
        this.setState({showDropdown: !this.state.showDropdown});
    }
    dropdownBlur(e){
        if( [...this.dropdownButtonContainerRef.current.children].indexOf(e.target) === -1  ){
            this.setState({showDropdown: false});
        }
    }
    login(username){
        const {login} = this.props;
        login(username);
        this.setState({showDropdown: false});
    }
    logout(){
        const {logout} = this.props;
        logout();
    }
    isPendingHandler(isPending){
        this.setState({preventClose: isPending})

    }

    render(){
        const {showDropdown, preventClose} = this.state;
        const {username} = this.props.user;
        const loggedIn = username !== null;

        return(
            <div className ={styles.userSection}>
                <div className = {styles.leftContent}></div>
                <div className = {styles.rightContent} ref = {this.dropdownButtonContainerRef}>
                    <div onClick = {this.toogleDropdown}>{username || 'Login'}</div>
                    <div onClick = {this.toogleDropdown}>&#9662;</div>

                    {loggedIn && <div onClick = {this.logout}>logout</div>}

                </div>
                <div className = {styles.dropDownContainer}>
                    <Dropdown showDropdown = {showDropdown} onDropdownBlur = {this.dropdownBlur} preventClose = {preventClose}>
                        {!loggedIn && <LoginForm login = {this.login} isPending = {this.isPendingHandler}/>}
                    </Dropdown>
                </div>
            </div>
        );
    }

}


const mapStateToProps = state=> ({
    user: state.UserReducer
});
const mapDispatchToProps = (dispatch)=>({
    login: username => 
        dispatch(login(username))
    ,    
    logout: () =>{
        dispatch(()=> logout(dispatch) )
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(UserSection);
