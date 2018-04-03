import React from 'react';

import styles from '../styles/RegisterForm.scss';


class RegisterForm extends React.Component {
    constructor(){
        super();
        this.state = {
            username:'',
            password:'',
            password2:'',
            email:'',
            errors:{}          
        }
    }
    render() {
        return (
            <div className = {styles.registerForm}>
                RegisterForm
          
                    <div className = {styles.fieldContainer}>
                        <div className = {styles.leftContent}><span>Username:</span></div>
                        <div className = {styles.rightContent}>
                        
                        <div className = {styles.inputContent}><input /> </div>
                        <div className = {styles.validationContent}><span>zz</span></div>
                        </div>
                        
                    </div>

    
               
            </div>
        );
    }
}

export default RegisterForm;
