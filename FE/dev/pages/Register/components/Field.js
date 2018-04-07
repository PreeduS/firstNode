import React from 'react';

//import styles from '../styles/Field.scss';
import CommonField from '../../../commons/components/Field';


class Field extends React.Component {
    constructor(){
        super();
        //this.validationManager = this.validationManager.bind(this);
    }
    /*
    validationManager(e, mapTo){
        //var {validationManager, mapTo} = this.props;
        validationManager(e.target.value, mapTo)
    }*/

    render(){
        //const {validationManager, label, type, value, errors, mapTo} = this.props;
        const {changeHandler, label, type, value, errors, mapTo, blurHandler} = this.props;

        return(
            <CommonField 
                //changeHandler = {validationManager}
                changeHandler = {changeHandler}
                blurHandler = {blurHandler}
                type = {type}
                label = {label}
                value = {value}
                errors = {errors}
                mapTo = {mapTo}
            />
        );
        
    }
}

export default Field;