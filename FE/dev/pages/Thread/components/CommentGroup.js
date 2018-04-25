import React from 'react';
import * as styles from '../styles/CommentGroup.js';
import Link from '~/commons/components/Link';

import Comment from './Comment';


class CommentGroup extends React.Component {
    constructor(){
        super();
        this.content = '';
        this.loadMoreComments = this.loadMoreComments.bind(this);
    }

    loadMoreComments(nrReplies, replies){
        //if(!nrReplies){return ''; }
        let nrVisibleRplies = replies ? replies.length : 0;
        let content = 'Load more comments[t]' + nrReplies +' - [v]' + nrVisibleRplies;
        return <Link>{content}</Link>;
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

export default CommentGroup;
