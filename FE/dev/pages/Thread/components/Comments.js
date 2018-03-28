import React from 'react';
import {connect} from 'react-redux';

import Comment from './Comment';

class Comments extends React.Component {
    render() {
        return <div>On Comments...
            <br /><br />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            
        </div>

    }
}

export default Comments;
//export default connect(null, null)(Comments);