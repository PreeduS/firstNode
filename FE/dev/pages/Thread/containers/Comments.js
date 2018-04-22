import React from 'react';
import {connect} from 'react-redux';

import CommentsReducer from '../reducers/CommentsReducer'
import ThreadReducer from '../reducers/ThreadReducer'
import {loadComments, addComment } from '../actions';

import CommentGroup from '../components/CommentGroup';
import CommentTextArea from '../components/CommentTextArea';

import * as styles from '../styles/Comments.js';

class Comments extends React.Component {
    constructor(){
        super();

        this.addNewComment = this.addNewComment.bind(this);
    }
    componentDidMount(){
        this.props.loadComments();
    }

    addNewComment(content){
        const threadId = 1; //temp ----------------
        const comment = {content, threadId};
        this.props.addComment(comment);
    }

    render() {
        const commentsData = this.props.comments.data;

        return (
            <styles.CommentsWrapper>
                On Comments...
                <br /><br />
                <CommentTextArea addCommentOrReply = {this.addNewComment} isVisible = {true}/><br />

                {commentsData.length > 0 && commentsData.map( c =>
                    <CommentGroup
                        key = {c.id}
                        comment = {c}
                        addNewComment = {this.addNewComment}
                    />
                )}

            </styles.CommentsWrapper>
        );

    }
}



const mapStateToProps = state =>( {
    comments: state.CommentsReducer,
    thread: state.ThreadReducer
});
const mapDispatchToProps = dispatch => ({
    loadComments:() =>
        dispatch(()=> loadComments()(dispatch))
    ,
    addComment: comment =>
        dispatch(() => addComment(comment)(dispatch) )

});


export default connect(mapStateToProps, mapDispatchToProps)(Comments);