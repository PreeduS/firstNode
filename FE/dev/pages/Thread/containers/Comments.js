import React from 'react';
import {connect} from 'react-redux';
import axios from 'Axios';

import CommentsReducer from '../reducers/CommentsReducer'
import ThreadReducer from '../reducers/ThreadReducer'
import {loadComments, addComment } from '../actions';

import CommentGroup from '../components/CommentGroup';
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
        this.props.loadComments(); 
    }
    //edit here rem
    addNewComment(content){
        let tempKey = '_'+this.props.comments.length;//rem//use response db id later
        var newComment = {id: tempKey, content, replyTo: null, groupId: null, nrReplies: 0, userId: 1}
        this.props.addComment(newComment);

    }

    render() {
        const {comments} = this.props;
        //console.log('comments: ',comments)
        console.log('activeTextarea: ',this.props.thread.activeTextarea)

        return <div className = {styles.commentsWrapper}> 
            On Comments...
            <br /><br />
            <CommentTextArea addNewComment = {this.addNewComment} isVisible = {true}/><br />

            {comments.map( c => 
                <CommentGroup key = {c.id}  comment = {c} addNewComment = {this.addNewComment}> </CommentGroup> 
            )}


            
        </div>

    }
}



const mapStateToProps = (state)=>( {
    comments: state.CommentsReducer,
    thread: state.ThreadReducer
});
const mapDispatchToProps = (dispatch)=>({
    loadComments:() =>
        dispatch(()=> loadComments()(dispatch))
    ,    
    addComment: comment =>
        dispatch(addComment(comment))
    
   // ,setActiveTextarea: id =>
    //    dispatch(setActiveTextarea(id))
    
});


export default connect(mapStateToProps, mapDispatchToProps)(Comments);