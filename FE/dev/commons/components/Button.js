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
        const { width, height, children, disabled, loading, inlineStyles, type, ...rest} = this.props;
        const StyledContainer = {
            'default': styles.ButtonDefault,
            'gray': styles.ButtonGray,
        }[type];

        const content = loading ?
        (<styles.Content>
            <Loader active inline size = "tiny"/>
            <span>{children}</span>
        </styles.Content>) : <span>{children}</span>;

        return(
            <StyledContainer width = {width} height = {height} inlineStyles = {inlineStyles} className = {disabled? 'disabled':''}>
                <ButtonSemanticUI onClick = {this.clickHandler} disabled = {disabled} {...rest} >
                    {content}
                </ButtonSemanticUI>
            </StyledContainer>
        )
    }
}

Button.propTypes = {
    children: PropTypes.string.isRequired,
    //width: PropTypes.number,
    width: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
        //PropTypes.oneOf(['auto'])
    ]),
    height: PropTypes.number,
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    type: PropTypes.oneOf(['default', 'gray']),
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
    inlineStyles:'',
    type:'default'
};

export default Button;

