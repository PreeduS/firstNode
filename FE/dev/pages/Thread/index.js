import React from 'react';


import Comments from './containers/Comments';
import Content from './components/Content';

import * as styles from './styles/Thread';


class Thread extends React.Component {
    render() {
        return (
            <styles.ThreadWrapper>
                <Content />
                <Comments />
            </styles.ThreadWrapper>
        );
    }
}

export default Thread;
