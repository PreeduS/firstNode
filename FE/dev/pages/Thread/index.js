import React from 'react';
import {connect} from 'react-redux';


import Comments from './containers/Comments';
import Content from './components/Content';

import styles from './styles/Thread.scss';


class Thread extends React.Component {
    render() {
        return (
            <div className = {styles.threadWrapper}>
                <Content />
                <Comments />
            </div>
        );
    }
}

export default Thread;
//export default connect(null, null)(Thread);