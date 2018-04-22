import React from 'react';
import PropTypes from 'prop-types';
import * as styles from '../styles/Button.js';

class Button extends React.Component {
    constructor(){
        super();
        this.clickHandler = this.clickHandler.bind(this);
    }
    clickHandler(e){
        const {onClick, disabled} = this.props;
        if(disabled){ return; }
        if(onClick){
            onClick(e);
        }
    }

    render(){
        const { width, children, disabled} = this.props;

        return(
            <styles.Button width = {width} className = {disabled? 'disabled':''}>
                <div onClick = {this.clickHandler}>
                    {children}
                </div>
            </styles.Button>
        )
    }
}

Button.propTypes = {
    children: PropTypes.string.isRequired,
    width: PropTypes.number,
    height: PropTypes.number,
    disabled: PropTypes.bool,
};

Button.defaultProps = {
    width: 100,
    height: 24,
    disabled: false,
};

export default Button;

