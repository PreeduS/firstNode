import React from 'react';
import {connect} from 'react-redux';

import CommentsReducer from '../reducers/CommentsReducer'
import ThreadReducer from '../reducers/ThreadReducer'
import {addComment, updateTextarea } from '../actions';

import CommentGroup from '../components/CommentGroup';
import CommentTextArea from '../components/CommentTextArea';

import * as styles from '../styles/Comments.js';

class Comments extends React.Component {
    constructor(){
        super();

        this.addNewComment = this.addNewComment.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
    }

    addNewComment(content){
        const threadId = 1; //temp ----------------
        const comment = {content, threadId};
        this.props.addComment(comment);
    }
    changeHandler(el){
        const id = -1;
        this.props.updateTextarea(id, el.target.value)
    }

    render() {
        const commentsData = this.props.comments.data;

        return (
            <styles.CommentsWrapper>
                <CommentTextArea
                    id = {-1}
                    addCommentOrReply = {this.addNewComment}
                    isVisible = {true}
                    onChange = {this.changeHandler}
                />
                <br />

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
    updateTextarea: (id, value) =>
        dispatch(() => updateTextarea(id, value)(dispatch) )
    ,
    addComment: comment =>
        dispatch(() => addComment(comment)(dispatch) )

});


export default connect(mapStateToProps, mapDispatchToProps)(Comments);