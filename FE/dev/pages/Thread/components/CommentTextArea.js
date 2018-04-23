import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


import CommentsReducer from '../reducers/CommentsReducer'

import Button from '~/commons/components/Button';
import * as styles from '../styles/CommentTextArea';

class CommentTextArea extends React.Component {
    constructor(){
        super();
        this.resizeTextarea = this.resizeTextarea.bind(this);
        this.addCommentOrReply = this.addCommentOrReply.bind(this);
        this.prevHeight = null;

        this.state = {
            textarea:''
        }
    }

    resizeTextarea(el){
        let elem = el.target;
        elem.style.height = 'auto';
        elem.style.height = elem.scrollHeight;
    }
    updateTextAreaValue(el){
        let value = el.target.value;
        this.setState({
            textarea:value
        });
    }

    addCommentOrReply(){  
        let content = this.state.textarea;
        this.props.addCommentOrReply(content); //maybe onAdd onSubmit onAddCommentOrReply
    }

    render() {
        const {id, isReply, isVisible} = this.props;
        const isPending = this.props.comments.status.findIndex(el => el.id === id && el.status === 'pending' ) !== -1;
        const isSubmitDisabled = !this.state.textarea.trim().length || isPending;
        const label = isReply? 'Add Reply' : 'Add Comment';
        if(!isVisible){
            return <div></div>;
        }

        return(
            <styles.CommentTextAreaWrapper>
                <textarea
                    disabled = {isPending}
                    onChange = {e=> {this.resizeTextarea(e); this.updateTextAreaValue(e);} }
                    value = {this.state.textarea}>
                </textarea>
                <br />
                <Button onClick = {this.addCommentOrReply} disabled = {isSubmitDisabled}>{label}</Button>
            </styles.CommentTextAreaWrapper>
        );
    }
}
CommentTextArea.propTypes = {
    comments: PropTypes.object.isRequired,
    isReply: PropTypes.bool,
    isVisible: PropTypes.bool.isRequired,
    addCommentOrReply: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired
}


const mapStateToProps = state =>( {
    comments: state.CommentsReducer
});

export default connect(mapStateToProps, null)(CommentTextArea);
//export default CommentTextArea;
