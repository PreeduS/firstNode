
import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom';

import ThreadComponent from '../pages/Thread';

import styles from './AppRouter.scss';

// / <NavLink exact activeClassName = {styles.routeActive} to="/Thread" >ThreadComponent</NavLink>

const AppRouter = () =>(
    <Router>
        <div>
            <div className = {styles.appTopMenu}>
                <NavLink exact  to="/Thread" >ThreadComponent</NavLink>
                <NavLink exact  to="/" >null</NavLink>
            </div>
           
            <div className = {styles.appWrapper}>
                <div className = {styles.appMainContainer}>
                    <Switch >
                        <Route path="/Thread" component = {ThreadComponent} />
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