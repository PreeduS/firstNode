import React from 'react';
import PropTypes from 'prop-types';
import * as styles from '../styles/Link.js';

class Link extends React.Component {
    render(){
        const {children} = this.props;
        return <styles.Link>{children}</styles.Link>
    }
}

Link.propTypes = {
    children: PropTypes.string.isRequired
}


export default Link;