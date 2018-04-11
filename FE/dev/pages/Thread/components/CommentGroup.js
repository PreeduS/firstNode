import React from 'react';

import * as styles from '../styles/CommentGroup.js';

import Comment from './Comment';


class CommentGroup extends React.Component {
    constructor(){
        super();
        this.content = '';
        this.addNewComment = this.addNewComment.bind(this);
        this.loadMoreComments = this.loadMoreComments.bind(this);
    }

    addNewComment(value){
        this.props.addNewComment(value);
    }

    loadMoreComments(nrReplies, replies){
        //if(nrReplies === 0){return ''; }
        let nrVisibleRplies = replies ? replies.length : 0;
        return `---[t]${nrReplies} - [v]${nrVisibleRplies}`;
    }

    render() {
        const {replies, nrReplies} = this.props.comment;
        var loadMoreComments = this.loadMoreComments(nrReplies, replies);
        //console.log(this.props.comment.id, ' replies  ',replies)
        return (
            <styles.CommentGroupWrapper >   
                <Comment {...this.props.comment} isReply = {false} />
                {replies && replies.map(r =>{
                    return <div key={r.id}> <Comment {...r} isReply = {true}  addNewComment = {this.addNewComment}/> </div>
                })}
                <styles.LoadCommentsContainer hasReplies = {replies!==undefined}>
                    Load more comments {loadMoreComments}
                </styles.LoadCommentsContainer>
            </styles.CommentGroupWrapper>

        );
    }
}

export default CommentGroup;
