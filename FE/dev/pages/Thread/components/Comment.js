import React from 'react';
import {connect} from 'react-redux';

import * as styles from '../styles/Comment.js';

import CommentTextArea from './CommentTextArea';
import ThreadReducer from '../reducers/ThreadReducer';
import {addReply, setActiveTextarea} from '../actions';


class Comment extends React.Component {
    constructor(){
        super();
        this.toggleReply = this.toggleReply.bind(this);
        this.addNewReply = this.addNewReply.bind(this);
        this.state = {
            isReplyVisible: false
        }
    }

    componentWillReceiveProps(){
        if( this.props.thread.activeTextarea !== this.props.id || this.props.thread.activeTextarea === null){
            this.setState({
                isReplyVisible: false
            });
        }
    }


    toggleReply(){
        this.props.setActiveTextarea(this.props.id);   
    }

    addNewReply(value){  
        const {id, isReply, threadId} = this.props;
        const reply = {replyTo: id,content:value, threadId};

        this.props.addReply(reply);
    }

    render(){
        var {content, isReply, userId, nrReplies, replies} = this.props;

        var isVisible = (this.props.thread.activeTextarea.currentId === this.props.id && 
            this.props.thread.activeTextarea.active) ? true : false;

        const tempc = ` | id: ${this.props.id} --- currentId:  ${this.props.thread.activeTextarea.currentId} 
        --- active: ${this.props.thread.activeTextarea.active} ,
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur	`;
        content = content + ' - ' + tempc;// + tempc.substr(0, Math.floor(Math.random()*300+60) )

  


        return(
            <styles.CommentsWrapper  isReply = {isReply}>
                <styles.Group>
                    <styles.Container>			
                        <styles.ContentLeft>
                            <styles.Logo></styles.Logo>
                        </styles.ContentLeft>
                        <styles.ContentRight>
                            <styles.Header>
                                <styles.Username>userId: {userId} </styles.Username>
                            </styles.Header>
                            <styles.Content >
                                {content}
                            </styles.Content>
                            <styles.Footer>
                                <b onClick = {this.toggleReply}>Reply</b> <br />

                            </styles.Footer>
                            <div>
                                <CommentTextArea 
                                    isVisible = {isVisible} 
                                    isReply={true} 
                                    addNewComment = {this.addNewReply}
                                />
                            </div>
                        </styles.ContentRight>
                    </styles.Container>
                </styles.Group>
            </styles.CommentsWrapper>
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