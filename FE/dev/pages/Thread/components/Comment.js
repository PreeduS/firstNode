import React from 'react';
import {connect} from 'react-redux';

import styles from '../styles/Comment.scss';

class Comments extends React.Component {
    render() {
        return (
            
            <div className = {styles.commentsWrapper}>
                <div className = {styles.group}>
                    <div className = {styles.container}>			
                        <div className =  {styles.contentLeft}><div className = {styles.logo}></div></div>
                        <div className = {styles.contentRight}>
                            <div className = {styles.header}>
                                <div className = {styles.username}>uname</div>
                            </div>
                            <div className = {styles.content}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur				
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