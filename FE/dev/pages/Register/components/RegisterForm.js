import React from 'react';

import styles from './styles/RegisterForm.scss';


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
            <div>
                RegisterForm
                <div>Username:<input /> </div>
               
            </div>
        );
    }
}

export default RegisterForm;
