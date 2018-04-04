import React from 'react';
import {connect} from 'react-redux';
import axios from 'Axios';

import Comment from '../components/CommentGroup';
import CommentTextArea from '../components/CommentTextArea';

import styles from '../styles/Comments.scss';


class Comments extends React.Component {
    constructor(){
        super();
        this.state = {
            comments:[]
        }

        this.addNewComment = this.addNewComment.bind(this);
    }
    componentDidMount(){
        let that = this;

        axios.get('/api/thread/getall')
        .then(function (response) {
          console.log(response.data);
 
            that.setState({
                comments:response.data
            })

        })
        .catch(function (error) {
          console.log(error);
        });
      

    }

    addNewComment(content){
        let tempKey = '_'+this.state.comments.length;//rem//use response db id later
        var newComment = {id: tempKey, content, replyTo: null, groupId: null, nrReplies: 0, userId: 1}

        this.setState({
            comments:[
                newComment,
                ...this.state.comments
            ]
        });

    }

    render() {
        const {comments} = this.state;
        return <div className = {styles.commentsWrapper}> 
            On Comments...
            <br /><br />
            <CommentTextArea addNewComment = {this.addNewComment} isVisible = {true}/><br />

            {comments.map( c => 
                <Comment key = {c.id}  comment = {c} addNewComment = {this.addNewComment}> </Comment> 
            )}


            
        </div>

    }
}

export default Comments;
//export default connect(null, null)(Comments);