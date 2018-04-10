import React from 'react';
import {UserWrapper, LeftContainer, RightContainer} from '../styles/User';

class User extends React.Component{
    render(){
        return(
            <UserWrapper>

                <LeftContainer>
                    Left
                </LeftContainer>
                <RightContainer>
                    Right
                </RightContainer>

            </UserWrapper>
        );
    }
}

export default User;