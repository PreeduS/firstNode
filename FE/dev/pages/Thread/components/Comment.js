import React from 'react';
import {connect} from 'react-redux';


import styles from '../styles/Comment.scss';

class Comments extends React.Component {
    constructor(){
        super();
        this.content = '';
    }

    componentWillMount(){
        this.content = this.props.children.substr(0, Math.floor(Math.random()*300+60) )
    }
    render() {
        const {isReply} = this.props;
        return (

            <div className = {styles.commentsWrapper + ' ' + ( isReply? styles.reply:'' )}>
                <div className = {styles.group}>
                    <div className = {styles.container}>			
                        <div className =  {styles.contentLeft}><div className = {styles.logo}></div></div>
                        <div className = {styles.contentRight}>
                            <div className = {styles.header}>
                                <div className = {styles.username}>uname</div>
                            </div>
                            <div className = {styles.content}>
                                {this.content }
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

export default Comments;
//export default connect(null, null)(Comments);