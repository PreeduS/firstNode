import React from 'react';

import { Link , NavLink} from 'react-router-dom';

import styles from '../styles/Thread.scss';
class Thread extends React.Component {

    render(){
        const {id,content} = this.props
        return(
            <div className = {styles.threadWrapper}>
                <div className = {styles.topHeader}><div>header</div></div>           
                <div className = {styles.content}>
                    <NavLink exact  to={"/Thread/"+id} >
                      {content}
                    </NavLink>
                </div>
               
                
            </div>
        );
    }
}

export default Thread;