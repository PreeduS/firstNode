import React from 'react';
import axios from 'Axios';

import styles from '../styles/UserHeader.scss';

import Dropdown from './Dropdown';
import Field from './Field';

//temp
class LoginForm extends React.Component{
    constructor(){
        super();
        this.changeHandler = this.changeHandler.bind(this);
        this.login = this.login.bind(this);

        this.state = {
            username:'',
            password:'',
            pending: false,
            status:''
        }
    }

    login(){
        this.setState({pending:true});
        const {username, password} = this.state;
      
        axios.post('/api/UserManager/login',{username, password}).then( result =>{           
            console.log(result.data); 
            this.setState({
                pending:false,
                status: result.data
            });
        }).catch(error => {
            this.setState({
                pending: false,
                status: error.response.data.error,
            });
        });        
    }  

    changeHandler(value, mapTo){
        this.setState({
            [mapTo]:value
        });
    }

    render(){
        const {username, password, status} = this.state;
        return(
            <div>

                <Field 
                    type= "text" 
                    label="Username" 
                    errors = {null} 
                    changeHandler = {this.changeHandler}
                    mapTo = {'username'}
                    value = {username}
                />
                <Field 
                    type= "password" 
                    label="Password" 
                    errors = {null} 
                    changeHandler = {this.changeHandler}
                    mapTo = {'password'}
                    value = {password}
                />
           
                {status}
                <br />
                <button disabled = {this.state.pending} onClick = {this.login}>Login</button>
            </div>
        );
    }
}



class UserHeader extends React.Component {
    constructor(){
        super();
        this.state = {
            showDropdown:false
        }
        this.dropdownButtonContainerRef = React.createRef(); 

        this.toogleDropdown = this.toogleDropdown.bind(this);
        this.dropdownBlur = this.dropdownBlur.bind(this);
    }
    toogleDropdown(){
        this.setState({showDropdown: !this.state.showDropdown});
    }
    dropdownBlur(e){
        if( [...this.dropdownButtonContainerRef.current.children].indexOf(e.target) === -1  ){
            this.setState({showDropdown: false});
        }

    }

    render(){
        const {showDropdown} = this.state;
    
        return(
            <div className ={styles.userHeader}>
                <div className = {styles.leftContent}>l</div>
                <div className = {styles.rightContent} ref = {this.dropdownButtonContainerRef}>
                    <div onClick = {this.toogleDropdown}>username</div>
                    <div onClick = {this.toogleDropdown}>&#9662;</div>            
                </div>
                <div className = {styles.dropDownContainer}>
                    <Dropdown showDropdown = {showDropdown} onDropdownBlur = {this.dropdownBlur}>
                        <LoginForm />
                    </Dropdown>
                </div>
            </div>
        );
    }

}

export default UserHeader;