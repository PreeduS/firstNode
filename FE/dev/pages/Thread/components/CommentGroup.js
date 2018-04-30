import React from 'react';
import {connect} from 'react-redux';
import * as styles from '../styles/CommentGroup.js';
import Link from '~/commons/components/Link';
//reducers
import CommentsReducer from '../reducers/CommentsReducer'
//actions
import {loadMoreReplies } from '../actions';
//components
import Comment from './Comment';


class CommentGroup extends React.Component {
    constructor(){
        super();
        this.content = '';
        this.loadMoreRepliesLink = this.loadMoreRepliesLink.bind(this);
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
    loadMoreRepliesLink(nrReplies, replies){   //edit name rem getLoadMoreReplies
        //if(!nrReplies){return ''; }

        const {id} = this.props.comment;
        //const currentStatus = this.props.commentsStatus[id];
        const currentStatus = this.props.comments.status.comments[id];

        const isPending = (currentStatus === undefined) ? false : currentStatus.commentGroupStatus === 'pending';


        let nrVisibleRplies = replies ? replies.length : 0;
        let content = (isPending ? '[L] ':'') +'Load more replies[t]' + nrReplies +' - [v]' + nrVisibleRplies;
        return <Link onClick = {this.loadMoreReplies}>{content}</Link>;
    }

    render() {
        const {replies, nrReplies} = this.props.comment;
        var loadMoreRepliesLink = this.loadMoreRepliesLink(nrReplies, replies);

        return (
            <styles.CommentGroupWrapper>
                <Comment {...this.props.comment} isReply = {false} />
                {replies && replies.length > 0 && replies.map(r =>
                    <div key={r.id}>
                        <Comment {...r} isReply = {true} />
                    </div>
                )}
                <styles.LoadCommentsContainer hasReplies = {replies!==undefined}>
                    {loadMoreRepliesLink}
                </styles.LoadCommentsContainer>
            </styles.CommentGroupWrapper>

        );
    }
}

const mapStateToProps = state =>( {
    comments: state.CommentsReducer
});

const mapDispatchToProps = dispatch=>({
    loadMoreReplies: (threadId, commentGroupId, lastReplyId) =>
        dispatch(() => loadMoreReplies(threadId, commentGroupId, lastReplyId)(dispatch) )
    ,
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentGroup);
//export default CommentGroup;
