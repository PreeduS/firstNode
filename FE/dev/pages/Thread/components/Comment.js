import React from 'react';
import {connect} from 'react-redux';

import styles from '../styles/Comment.scss';

import CommentTextArea from './CommentTextArea';


class Comment extends React.Component {
    constructor(){
        super();
        this.loadMoreComments = this.loadMoreComments.bind(this);
        this.toggleReply = this.toggleReply.bind(this);
        this.addNewComment = this.addNewComment.bind(this);
        this.state = {
            isReplyVisible:false
        }
    }
    loadMoreComments(nrReplies, replies){
        if(nrReplies === 0){return ''; }
        let nrVisibleRplies = replies ? replies.length : 0;
        return `---[t]${nrReplies} - [v]${nrVisibleRplies}`;
    }
    toggleReply(){
        this.setState({
            isReplyVisible: !this.state.isReplyVisible
        });
    }
    addNewComment(value){
        this.props.addNewComment(value)
    }

    render(){
        let {content, isReply, userId, nrReplies, replies} = this.props;

        const tempc = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur	`;
        content = content + ' - ' + tempc;// + tempc.substr(0, Math.floor(Math.random()*300+60) )

        let loadMoreComments = this.loadMoreComments(nrReplies, replies);

        return(
            <div style={{border:'1px solid gray'}} className = {styles.commentsWrapper + ' ' + ( isReply? styles.reply:'' )}>
                <div className = {styles.group}>
                    <div className = {styles.container}>			
                        <div className =  {styles.contentLeft}><div className = {styles.logo}></div></div>
                        <div className = {styles.contentRight}>
                            <div className = {styles.header}>
                                <div className = {styles.username}>userId: {userId} </div>
                            </div>
                            <div className = {styles.content}>
                                {content}  {loadMoreComments}
                            </div>
                            <div>
                                <b onClick = {this.toggleReply}>Reply</b><br />
                                <CommentTextArea isVisible = {this.state.isReplyVisible} isReply={true} addNewComment = {this.addNewComment}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}



export default Comment;
//export default connect(mapStateToProps, null)(Comment);