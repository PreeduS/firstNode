import React from 'react';
import axios from 'axios';

import Field from './Field';

import styles from '../styles/RegisterForm.scss';


class RegisterForm extends React.Component {
    constructor(){
        super();
        this.state = {
            values:{
                username:'',
                password:'',
                password2:'',
                email:''
            },
            errors:{},
            pending: false          
        }
        this.validationManager = this.validationManager.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
        this.blurHandler = this.blurHandler.bind(this);
        this.register = this.register.bind(this);
        this.doesUsernameExists = this.doesUsernameExists.bind(this);
 
    }
    
    register(){
        this.setState({pending:true});
        //temp get       
        axios.get('api/UserManager/register').then( result =>{           
            console.log(result.data); 
            this.setState({pending:false});
        }).catch(error => {
            console.log('err2 ', error.response);
            this.setState({pending:false});
        });        
    }  
    doesUsernameExists(username){
        return axios.get('api/UserManager/userExists?username='+username);
    }
    blurHandler(value, mapTo){
        this.doesUsernameExists(value).then(result=>{
            let userExists = result.data;

            this.setState({
                ...this.state,
                errors:{
                    ...this.state.errors,
                    usernameExists: userExists
                }
            });
            this.validationManager(value,'username')
            
        }).catch(error => {
            console.log('err2 ', error.response);                   
        });   
    
    }

    changeHandler(value, mapTo){
        this.validationManager(value, mapTo);
 

    }
    validationManager(value, mapTo){                                            //split later, in changeHandler
        //var newErrors =  {...this.state.errors};
        var newErrors =  {};
        var newValues;
        if(mapTo === undefined){
            newValues = {...this.state.values };
        }else{
            newValues = {
                ...this.state.values,
                [mapTo]:value
            };
        }

        //validations
        //set usernameExists only on blur, reset on keyup
        let keyupChange = mapTo === 'username' && value !== this.state.values.username;
        if(  !keyupChange && this.state.errors.usernameExists){
            newErrors.usernameExists = this.state.errors.usernameExists;
        }

        if( newErrors.usernameExists ){ newErrors.username = 'Username is taken'; }
        else if(newValues.username.indexOf(' ') !== -1){newErrors.username = 'No whitespaces allowed'; }
        else if(newValues.username.length < 4){newErrors.username = 'Min 4 chars'; }//else{newErrors.username = '';}
        

        if(newValues.password.length < 6){  
            newErrors.password = 'Min 6 chars'; 
        }//else{newErrors.password = '';}
        
        if(newValues.password !== newValues.password2 ){
            newErrors.password2 = 'Passwords don\'t match '; 
        }//else{ newErrors.password2 = ''; }


        this.setState({
            ...this.state,
            values:newValues,
            errors: newErrors 
        });
       
    }
    componentDidMount(){
        this.validationManager();
    }
    
    render() {
        let {errors} = this.state;
        return (
            <div className = {styles.registerForm}>
                RegisterForm    <br />
          
                <Field 
                    label = "Username" 
                    type="text" 
                    errors = {errors.username} 
                    changeHandler = {this.changeHandler}
                    blurHandler = {this.blurHandler}
                    value = {this.state.values.username}
                    mapTo = {'username'}
                />
                <Field 
                    label = "Password" 
                    type="password" 
                    errors = {errors.password}
                    changeHandler = {this.changeHandler}
                    value = {this.state.values.password}    
                    mapTo = {'password'}            
                />
                <Field 
                    label = "Password verify" 
                    type="password" 
                    errors = {errors.password2}
                    changeHandler = {this.changeHandler}
                    value = {this.state.values.password2}    
                    mapTo = {'password2'}            
                />

                <br />
                <button 
                    disabled = {Object.keys(this.state.errors).length >0 || this.state.pending } 
                    onClick = {this.register}           
                >
                    Register
                </button>
                <br />
             

            </div>
        );
    }
}

export default RegisterForm;
