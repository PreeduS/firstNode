import React from 'react';
import axios from 'axios';

import Field from '~/commons/components/Field';

import services from '~/commons/services';

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
        const {login} = this.props;
        this.props.isPending(true);
        services.login(username, password).then( result =>{
            console.log(result.data);
            this.props.isPending(false);
            this.setState({
                pending:false,
                status: result.data
            });
            login(username);
        }).catch(error => {
            this.props.isPending(false);
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

export default LoginForm;
