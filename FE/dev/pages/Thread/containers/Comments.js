import React from 'react';
import {connect} from 'react-redux';


import Comment from '../components/Comment';
import CommentTextArea from '../components/CommentTextArea';

import styles from '../styles/Comments.scss';


class Comments extends React.Component {
    constructor(){
        super();
        const tempc = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur	`;
        this.state = {
            comments:[
                {key: 1, content:tempc},
                {key: 2, content:tempc},
                {key: 3, content:tempc},
                {key: 4, content:tempc, isReply: true},
                {key: 5, content:tempc, isReply: true},
                {key: 6, content:tempc, isReply: true},
                {key: 7, content:tempc, isReply: true},
                {key: 8, content:tempc},
                {key: 9, content:tempc},
                {key: 10, content:tempc},
            ]
        }
    }

    render() {
        const {comments} = this.state;
        return <div className = {styles.commentsWrapper}> 
            On Comments...
            <br /><br />
            <CommentTextArea /><br />

            {comments.map( c => 
                <Comment key = {c.key} isReply = {c.isReply}> 
                    {c.content} 
                </Comment> 
            )}


            
        </div>

    }
}

export default Comments;
//export default connect(null, null)(Comments);