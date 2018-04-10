import React from 'react';

import CommonField from '../../../commons/components/Field';


class Field extends React.Component {
    constructor(){
        super();
    }

    render(){
        const {changeHandler, label, type, value, errors, mapTo, blurHandler} = this.props;

        return(
            <CommonField 
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