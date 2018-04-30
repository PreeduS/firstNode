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
        this.getTextareaValue = this.getTextareaValue.bind(this);
        //this.prevHeight = null;


    }

    resizeTextarea(el){
        let elem = el.target;
        elem.style.height = 'auto';
        elem.style.height = elem.scrollHeight;
    }
    updateTextAreaValue(el){
        this.props.onChange(el);
    }

    addCommentOrReply(){
        const textareaValue = this.getTextareaValue();
        this.props.addCommentOrReply(textareaValue); //maybe onAdd onSubmit
    }
    getTextareaValue(){
        const {id} = this.props;
        const currentStatus = this.props.comments.status.comments[id];
        const textareaValue = (currentStatus === undefined || currentStatus.value === undefined) ? '' : currentStatus.value;
        return textareaValue;
    }

    render() {
        const {id, isReply, isVisible} = this.props;
        const currentStatus = this.props.comments.status.comments[id];
        const isPending = currentStatus === undefined ? false : currentStatus.status === 'pending';
        const isError = currentStatus === undefined ? false : currentStatus.status === 'error';
        const textareaValue =  this.getTextareaValue();

        const isSubmitDisabled = textareaValue.trim().length === 0 || isPending;
        const label = isReply? 'Add Reply' : 'Add Comment';

        if(!isVisible){  return <div></div>;  }

        return(
            <styles.CommentTextAreaWrapper>
                <textarea
                    disabled = {isPending}
                    onChange = {e=> {this.resizeTextarea(e); this.updateTextAreaValue(e);} }
                    value = {textareaValue}>
                </textarea>
                <br />

                <Button
                    onClick = {this.addCommentOrReply}
                    disabled = {isSubmitDisabled}
                    inlineStyles = {'border-top:0px !important;border-top-left-radius: 0px;border-top-right-radius: 0px;'}
                    loading = {isPending}
                    width = {isReply ? 100 : 120}
                >
                {label}
                </Button>
                {isError && <styles.Error>An error occurred</styles.Error>}

            </styles.CommentTextAreaWrapper>
        );
    }
}
CommentTextArea.propTypes = {
    comments: PropTypes.object.isRequired,
    isReply: PropTypes.bool,
    isVisible: PropTypes.bool.isRequired,
    addCommentOrReply: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
}


const mapStateToProps = state =>( {
    comments: state.CommentsReducer
});

export default connect(mapStateToProps, null)(CommentTextArea);
