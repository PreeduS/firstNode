import React from 'react';
import {connect} from 'react-redux';

import styles from '../styles/Comment.scss';

import CommentTextArea from './CommentTextArea';
import ThreadReducer from '../reducers/ThreadReducer';
import {addReply, setActiveTextarea} from '../actions';


class Comment extends React.Component {
    constructor(){
        super();
        this.loadMoreComments = this.loadMoreComments.bind(this);
        this.toggleReply = this.toggleReply.bind(this);
        this.addNewReply = this.addNewReply.bind(this);
        this.state = {
            isReplyVisible: false
        }
    }

    componentWillReceiveProps(){
        //&& != null
        if( this.props.thread.activeTextarea !== this.props.id || this.props.thread.activeTextarea === null){
            this.setState({
                isReplyVisible: false
            });
        }
    }

    loadMoreComments(nrReplies, replies){
        if(nrReplies === 0){return ''; }
        let nrVisibleRplies = replies ? replies.length : 0;
        return `---[t]${nrReplies} - [v]${nrVisibleRplies}`;
    }
    toggleReply(){

        //if(this.props.thread.activeTextarea !== this.props.id || this.props.thread.activeTextarea === null){
           

    
        //}
        //let isVisible = !this.state.isReplyVisible;
        /*
            if(this.props.id !== this.props.thread.activeTextarea){
                var isVisible = false;
            }else{
                var isVisible = true;
            }
        
            console.log('2 --- ',this.props.id , this.props.thread.activeTextarea,'isVisible ', isVisible);
            this.setState({
                isReplyVisible: isVisible
            });
*/
            this.props.setActiveTextarea(this.props.id);
       
        
    }
    addNewReply(value){  
        const {id, isReply, threadId} = this.props;
        const reply = {replyTo: id,content:value, threadId};

        this.props.addReply(reply);
    }

    render(){
        var {content, isReply, userId, nrReplies, replies} = this.props;
       // var isVisible = this.state.isReplyVisible; 
        var isVisible = (this.props.thread.activeTextarea.currentId === this.props.id && 
            this.props.thread.activeTextarea.active) ? true : false;

        const tempc = ` | id: ${this.props.id} --- currentId:  ${this.props.thread.activeTextarea.currentId} 
        --- active: ${this.props.thread.activeTextarea.active} ,
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur	`;
        content = content + ' - ' + tempc;// + tempc.substr(0, Math.floor(Math.random()*300+60) )

        var loadMoreComments = this.loadMoreComments(nrReplies, replies);

        return(
            <div style={{border:'1px solid gray'}} className = {styles.commentsWrapper + ' ' + ( isReply? styles.reply:'' )}>
                <div className = {styles.group}>
                    <div className = {styles.container}>			
                        <div className =  {styles.contentLeft}><div className = {styles.logo}></div></div>
                        <div className = {styles.contentRight}>
                            <div className = {styles.header}>
                                <div className = {styles.username}>userId: {userId} </div>
                            </div>
                            <div className = {styles.content}>
                                {content}  {loadMoreComments}
                            </div>
                            <div>
                                <b onClick = {this.toggleReply}>Reply</b> <br />
                                <CommentTextArea 
                                    isVisible = {isVisible} 
                                    isReply={true} 
                                    addNewComment = {this.addNewReply}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state)=>( {
    thread: state.ThreadReducer
});

const mapDispatchToProps = dispatch=>({
    addReply: reply =>
        dispatch(() => addReply(reply)(dispatch) )
    ,
    setActiveTextarea: id =>
        dispatch(setActiveTextarea(id))
    
});


export default connect(mapStateToProps, mapDispatchToProps)(Comment);