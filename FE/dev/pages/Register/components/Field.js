import React from 'react';

import styles from '../styles/Field.scss';

class Field extends React.Component {
    render(){
        const {label, type, validationManager, value, mapTo, errors} = this.props;
        return(
            <div className = {styles.fieldContainer}>
                <div className = {styles.leftContent}><span>{label}:</span></div>
                <div className = {styles.rightContent}>
                
                <div className = {styles.inputContent}>
                    <input type={type} onChange = {(e)=>validationManager(e.target.value,mapTo)}/> 
                </div>
                <div className = {styles.validationContent}><span>{value.length>0 && errors}</span></div>
                </div>
                
            </div> 
        );
    }
}

export default Field;