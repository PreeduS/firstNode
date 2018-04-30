import React from 'react';
import {connect} from 'react-redux';
import * as styles from '../styles/Comment.js';
import Link from '~/commons/components/Link';

import CommentTextArea from './CommentTextArea';
//reducers
//import ThreadReducer from '../reducers/ThreadReducer';
import CommentsReducer from '../reducers/CommentsReducer'
import {addReply, toggleActiveTextarea, updateTextarea} from '../actions';


class Comment extends React.Component {
    constructor(){
        super();
        this.toggleReply = this.toggleReply.bind(this);
        this.addNewReply = this.addNewReply.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
    }

    toggleReply(){
        this.props.toggleActiveTextarea(this.props.id);
    }

    addNewReply(content){
        const {id, threadId} = this.props;
        const reply = {replyTo: id, content, threadId};

        this.props.addReply(reply);
    }
    changeHandler(el){
        const {id} = this.props;
        this.props.updateTextarea(id, el.target.value)
    }

    render(){
        var {id, content, isReply, userId } = this.props;

        //var isVisible = (this.props.thread.activeTextarea.currentId === this.props.id &&
        //    this.props.thread.activeTextarea.active);
        var isVisible = (this.props.activeTextarea[this.props.id] !== undefined && this.props.activeTextarea[this.props.id].active);


        const tempc = ` | id: ${id} ---
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur	`;
        content = content + ' - ' + tempc;




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
                                <div onClick = {this.toggleReply}>
                                    <Link>Reply</Link>
                                </div>

                            </styles.Footer>
                            <div>
                                <CommentTextArea
                                    id = {id}
                                    isVisible = {isVisible}
                                    isReply={true}
                                    addCommentOrReply = {this.addNewReply}
                                    onChange = {this.changeHandler}
                                />
                            </div>
                        </styles.ContentRight>
                    </styles.Container>
                </styles.Group>
            </styles.CommentsWrapper>
        );


    }

}

const mapStateToProps = state =>( {
    //thread: state.ThreadReducer,
    activeTextarea: state.CommentsReducer.activeTextarea
});

const mapDispatchToProps = dispatch=>({
    addReply: reply =>
        dispatch(() => addReply(reply)(dispatch) )
    ,
    updateTextarea: (id, value) =>
        dispatch(() => updateTextarea(id, value)(dispatch) )
    ,
    //setActiveTextarea: id =>
    toggleActiveTextarea: id =>
        dispatch(toggleActiveTextarea(id))

});


export default connect(mapStateToProps, mapDispatchToProps)(Comment);