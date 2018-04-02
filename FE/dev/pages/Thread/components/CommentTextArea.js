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
        this.prevHeight = null;
    }

    resizeTextarea(el){

        let elem = el.target;
       //console.log('resizeTextarea scrollHeight : ',elem.scrollHeight)
       console.log(' = ', this.prevHeight ,  elem.scrollHeight)

       if( this.prevHeight !== null && this.prevHeight !== elem.scrollHeight){
        console.log('c here')
       }
       


        elem.style.height = 'auto';
        elem.style.height = elem.scrollHeight;

        this.prevHeight = elem.scrollHeight;
    }

    render() {
        return (           
            <div className = {styles.commentTextAreaWrapper}>
                <textarea onChange = {this.resizeTextarea}  defaultValue = "CommentTextarea...">
                    
                </textarea>
            </div>
        );
    }
}

export default CommentTextArea;
