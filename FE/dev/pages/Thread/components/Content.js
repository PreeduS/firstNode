import React from 'react';
import {connect} from 'react-redux';

import styles from '../styles/Content.scss';

class Content extends React.Component {
    render() {
        return (           
            <div className = {styles.content}>
                <div>
                    <div className = {styles.leftContainer}>
                       z
                    </div>
                    <div className = {styles.rightContainer}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam,<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;
//export default connect(null, null)(Comments);