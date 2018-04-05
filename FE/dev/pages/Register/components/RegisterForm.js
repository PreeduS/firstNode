import React from 'react';

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
    }
    validationManager(value, mapTo){
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


        if(newValues.username.length < 4){newErrors.username = 'Min 4 chars'; }//else{newErrors.username = '';}
        
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
                    validationManager = {this.validationManager}
                    value = {this.state.values.username}
                    mapTo = {'username'}
                />
                <Field 
                    label = "Password" 
                    type="password" 
                    errors = {errors.password}
                    validationManager = {this.validationManager}
                    value = {this.state.values.password}    
                    mapTo = {'password'}            
                />
                <Field 
                    label = "Password verify" 
                    type="password" 
                    errors = {errors.password2}
                    validationManager = {this.validationManager}
                    value = {this.state.values.password2}    
                    mapTo = {'password2'}            
                />

                <br />
                <button disabled = {Object.keys(this.state.errors).length >0 && !this.state.pending } >
                    Register
                </button>
                <br />
             

            </div>
        );
    }
}

export default RegisterForm;
