import React from 'react';
import * as styles from './styles/AppTopMenu';
import UserHeader from '../UserHeader';

class AppTopMenu extends React.Component{

    render(){
            const {children} = this.props;
            const routesLinks = React.Children.map(children, child =>
                <span>-{child}-</span>
            )
        return(
            <styles.AppTopMenu>
                <div>
                    <div>
                        {routesLinks}
                    </div>
                </div>
                <div>
                    <UserHeader />
                </div>
            </styles.AppTopMenu>
        );
    }
}

export default AppTopMenu;
