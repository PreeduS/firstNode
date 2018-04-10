import React from 'react';

import styles from '../styles/CommentTextArea.scss';

class CommentTextArea extends React.Component {
    constructor(){
        super();
        this.textareaRef = null;
        this.setTextareaRef = el =>{  //  console.log('ref: ',el)
            his.textareaRef = el;
            // ref = {this.setTextareaRef}
        }
        this.resizeTextarea = this.resizeTextarea.bind(this);
        this.addNewComment = this.addNewComment.bind(this);
        this.prevHeight = null;

        this.state = {
            textarea:''
        }
    }

    resizeTextarea(el){
        let elem = el.target;
        //console.log('resizeTextarea scrollHeight : ',elem.scrollHeight)
        //console.log(' = ', this.prevHeight ,  elem.scrollHeight)

        if( this.prevHeight !== null && this.prevHeight !== elem.scrollHeight){
        //console.log('c here')
        }
        

        elem.style.height = 'auto';
        elem.style.height = elem.scrollHeight;

        this.prevHeight = elem.scrollHeight;
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
            <div className = {styles.commentTextAreaWrapper}>
                <textarea 
                    onChange = {(e)=> {this.resizeTextarea(e); this.updateTextAreaValue(e);} }  
                    value = {this.state.textarea}> 
                </textarea>
                <br />
                <button onClick = {this.addNewComment} disabled = {isSubmitDisabled}>{label}</button>
            </div>
        );
    }
}

export default CommentTextArea;
