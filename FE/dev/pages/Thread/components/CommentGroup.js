import React from 'react';
import {connect} from 'react-redux';

import Comment from './Comment';


class CommentGroup extends React.Component {
    constructor(){
        super();
        this.content = '';

    }

    render() {
        const {replies} = this.props;
        console.log('z: ', this.props)

        return (
            <div style={{border:'1px solid gray'}}>   
                <Comment {...this.props} isReply = {false} />
                {replies && replies.map(r =>{
                    return <div key={r.id}> <Comment {...r} isReply = {true} /> </div>
                })}
                <br />END <br />
            </div>

        );
    }
}

export default CommentGroup;
//export default connect(null, null)(Comments);