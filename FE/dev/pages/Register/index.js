import React from 'react';
import {connect} from 'react-redux';


import RegisterForm from './components/RegisterForm';

import styles from './styles/Register.scss';


class Register extends React.Component {
    render() {
        return (
            <div className = {styles.registerWrapper}>
                <RegisterForm />
            </div>
        );
    }
}

export default Register;
//export default connect(null, null)(Thread);