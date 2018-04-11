import React from 'react';
import * as styles from '../styles/CommentTextArea';

class CommentTextArea extends React.Component {
    constructor(){
        super();
        this.resizeTextarea = this.resizeTextarea.bind(this);
        this.addNewComment = this.addNewComment.bind(this);
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

    addNewComment(){
        let content = this.state.textarea ;
        this.props.addNewComment(content);
    }

    render() {
        const isSubmitDisabled = !this.state.textarea.trim().length;
        const label = this.props.isReply? 'Add Reply' : 'Add Comment';
        if(!this.props.isVisible){
            return <div></div>;
        }

        return (           
            <styles.CommentTextAreaWrapper>
                <textarea 
                    onChange = {e=> {this.resizeTextarea(e); this.updateTextAreaValue(e);} }  
                    value = {this.state.textarea}> 
                </textarea>
                <br />
                <button onClick = {this.addNewComment} disabled = {isSubmitDisabled}>{label}</button>
            </styles.CommentTextAreaWrapper>
        );
    }
}

export default CommentTextArea;
