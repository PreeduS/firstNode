import React from 'react';
import {connect} from 'react-redux';
import * as styles from '../styles/CommentGroup.js';
import Link from '~/commons/components/Link';
//actions
import {loadMoreReplies } from '../actions';
//components
import Comment from './Comment';


class CommentGroup extends React.Component {
    constructor(){
        super();
        this.content = '';
        this.loadMoreComments = this.loadMoreComments.bind(this);
        this.loadMoreReplies = this.loadMoreReplies.bind(this);
    }

    loadMoreReplies(){
        const {id, replies} = this.props.comment;
        const hasReplies = replies !== undefined;
        let lastReplyId = null;
        if(hasReplies){
            lastReplyId = replies[replies.length-1].id;
        }
        console.log('loadMoreReplies ',id, replies, lastReplyId)
        const threadId = 1;
        this.props.loadMoreReplies(threadId, id, lastReplyId)
    }
    loadMoreComments(nrReplies, replies){   //edit name rem getLoadMoreReplies
        //if(!nrReplies){return ''; }
        let nrVisibleRplies = replies ? replies.length : 0;
        let content = 'Load more replies[t]' + nrReplies +' - [v]' + nrVisibleRplies;
        return <Link onClick = {this.loadMoreReplies}>{content}</Link>;
    }

    render() {
        const {replies, nrReplies} = this.props.comment;
        var loadMoreComments = this.loadMoreComments(nrReplies, replies);

        return (
            <styles.CommentGroupWrapper>
                <Comment {...this.props.comment} isReply = {false} />
                {replies && replies.length > 0 && replies.map(r =>
                    <div key={r.id}>
                        <Comment {...r} isReply = {true} />
                    </div>
                )}
                <styles.LoadCommentsContainer hasReplies = {replies!==undefined}>
                    {loadMoreComments}
                </styles.LoadCommentsContainer>
            </styles.CommentGroupWrapper>

        );
    }
}


const mapDispatchToProps = dispatch=>({
    loadMoreReplies: (threadId, commentGroupId, lastReplyId) =>
        dispatch(() => loadMoreReplies(threadId, commentGroupId, lastReplyId)(dispatch) )
    ,
});

export default connect(null, mapDispatchToProps)(CommentGroup);
//export default CommentGroup;
