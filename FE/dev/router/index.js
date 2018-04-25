
import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';

import routes from './routes';

import styles from './AppRouter.scss';

// / <NavLink exact activeClassName = {styles.routeActive} to="/Thread" >ThreadComponent</NavLink>

import AppTopMenu from '../others/components/AppTopMenu';


const AppRouter = () =>(
    <Router>
        <div>
            <AppTopMenu>
                {routes.map( (route, index) => 
                    <NavLink key= {index} exact to={route.path}>{route.label}</NavLink>
                )}
                <NavLink exact  to="/" >null</NavLink>
            </AppTopMenu>

            <div className = {styles.appWrapper}>
                <div className = {styles.appMainContainer}>
                    <Switch >
                        {routes.map( (route, index) => 
                            <Route key= {index} path={route.path} component = {route.component} />
                        )}                        
                        <Route path="/" render = {()=> <div>Null /</div>} />
                    </Switch> 
                </div>
                <div className = {styles.appSideMenu}>
                    <Route path="/" render = {()=>
                            <div>Common </div>
                        }
                    />
                </div>
            </div>

        </div>
    </Router>
)

export default AppRouter;