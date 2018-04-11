import React from 'react';

import * as styles from '../styles/Content';

class Content extends React.Component {
    render() {
        return (           
            <styles.Content>
                <div>
                    <styles.LeftContainer>
                                          
                    </styles.LeftContainer>

                    <styles.RightContainer>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
                    </styles.RightContainer>
                </div>
            </styles.Content>
        );
    }
}

export default Content;
