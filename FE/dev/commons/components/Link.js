import React from 'react';
import PropTypes from 'prop-types';
import * as styles from '../styles/Link.js';

class Link extends React.Component {
    constructor(){
        super();
        this.clickHandler = this.clickHandler.bind(this);
    }
    clickHandler(e){
        if(this.props.onClick){
            this.props.onClick(e)
        }
    }

    render(){
        const {children} = this.props;
        return <styles.Link onClick = {this.clickHandler}>{children}</styles.Link>
    }
}

Link.propTypes = {
    children: PropTypes.string.isRequired,
    onClick: PropTypes.func
}


export default Link;