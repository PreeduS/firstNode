import React from 'react';

import * as styles from '../styles/Field';

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
            <styles.FieldContainer>
                <styles.LeftContent><span>{label}:</span></styles.LeftContent>
                <styles.RightContent>
                    <styles.InputContent>
                        <input type={type} value={value} onChange = {this.changeHandler} onBlur = {this.blurHandler}/>
                    </styles.InputContent>
                    {errors &&
                    <styles.ValidationContent>
                        <span>{value.length>0 && errors}</span>
                    </styles.ValidationContent>}
                </styles.RightContent>

            </styles.FieldContainer>
        )
    }
}

export default Field;

