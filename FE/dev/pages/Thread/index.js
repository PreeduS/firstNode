import React from 'react';
import {connect} from 'react-redux';


import Comments from './components/Comments';

class Thread extends React.Component {
    render() {
        return <div>On Thread...
            <Comments />
        </div>
    }
}

export default Thread;
//export default connect(null, null)(Thread);