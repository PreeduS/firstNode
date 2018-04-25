import React from 'react';
import PropTypes from 'prop-types';
import * as styles from '../styles/Button.js';
import { Button as ButtonSemanticUI, Loader } from 'semantic-ui-react'


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
        const { width, height, children, disabled, loading, inlineStyles, ...rest} = this.props;
        const content = loading ?
        (<styles.Content>
            <Loader active inline size = "tiny"/>
            <span>{children}</span>
        </styles.Content>) : <span>{children}</span>;

        return(
            <styles.Button width = {width} height = {height} inlineStyles = {inlineStyles} className = {disabled? 'disabled':''}>
                <ButtonSemanticUI onClick = {this.clickHandler} disabled = {disabled} {...rest} >
                    {content}
                </ButtonSemanticUI>
            </styles.Button>
        )
    }
}

Button.propTypes = {
    children: PropTypes.string.isRequired,
    width: PropTypes.number,
    height: PropTypes.number,
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
};

Button.defaultProps = {
    width: 120,
    height: 24,
    disabled: false,
    loading: false,
    fluid: true,
    size:'medium',
    compact:true,
    basic:true,
    inlineStyles:''
};

export default Button;

