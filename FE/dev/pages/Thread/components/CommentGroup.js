import React from 'react';

import Comment from './Comment';


class CommentGroup extends React.Component {
    constructor(){
        super();
        this.content = '';
        this.addNewComment = this.addNewComment.bind(this);
    }

    addNewComment(value){
        this.props.addNewComment(value);
    }

    render() {
        const {replies} = this.props.comment;
        //console.log(this.props.comment.id, ' replies  ',replies)
        return (
            <div style={{border:'1px solid gray'}}>   
                <Comment {...this.props.comment} isReply = {false} />
                {replies && replies.map(r =>{
                    return <div key={r.id}> <Comment {...r} isReply = {true}  addNewComment = {this.addNewComment}/> </div>
                })}
                <br />END <br />
            </div>

        );
    }
}

export default CommentGroup;
