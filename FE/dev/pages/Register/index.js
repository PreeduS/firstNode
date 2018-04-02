import React from 'react';
import {connect} from 'react-redux';


//import Comments from './containers/Comments';

import styles from './styles/Register.scss';


class Register extends React.Component {
    render() {
        return (
            <div className = {styles.registerWrapper}>
                Register
            </div>
        );
    }
}

export default Register;
//export default connect(null, null)(Thread);