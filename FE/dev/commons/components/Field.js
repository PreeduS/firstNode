import React from 'react';

import styles from '../styles/Field.scss';

class Field extends React.Component {
    constructor(){
        super();
        this.changeHandler = this.changeHandler.bind(this);
        this.blurHandler = this.blurHandler.bind(this);
    }
    changeHandler(e){
        var {changeHandler, mapTo} = this.props;
        changeHandler(e.target.value, mapTo)
    }
    blurHandler(e){
        var {blurHandler, mapTo} = this.props;
        if(!blurHandler){return;}
        blurHandler(e.target.value, mapTo);
    }
    render(){
        let { label, value, errors, type} = this.props;

        return(
            <div className = {styles.fieldContainer}>
                <div className = {styles.leftContent}><span>{label}:</span></div>
                <div className = {styles.rightContent}>
                    <div className = {styles.inputContent}>
                        <input type={type} value={value} onChange = {this.changeHandler} onBlur = {this.blurHandler}/>
                    </div>
                    {errors &&
                    <div className = {styles.validationContent}>
                        <span>{value.length>0 && errors}</span>
                    </div>}
                </div>

            </div>
        )
    }
}

export default Field;

