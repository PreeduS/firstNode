
import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom';

import ThreadComponent from '../pages/Thread';
import ThreadsComponent from '../pages/Threads';
import RegisterComponent from '../pages/Register';
import UsersComponent from '../pages/Users';

import styles from './AppRouter.scss';

// / <NavLink exact activeClassName = {styles.routeActive} to="/Thread" >ThreadComponent</NavLink>

import UserHeader from '../others/components/UserHeader';


const AppRouter = () =>(
    <Router>
        <div>
            <div className = {styles.appTopMenu}>
                <div>
                    <NavLink exact  to="/Thread" >ThreadComponent</NavLink>
                    <NavLink exact  to="/Threads" >ThreadsComponent</NavLink>
                    <NavLink exact  to="/Register" >RegisterComponent</NavLink>
                    <NavLink exact  to="/Users" >UsersComponent</NavLink>
                    <NavLink exact  to="/" >null</NavLink>
                </div>
                <div>
                <UserHeader />
                </div>
            </div>
           
            <div className = {styles.appWrapper}>
                <div className = {styles.appMainContainer}>
                    <Switch >
                        <Route path="/Thread" component = {ThreadComponent} />
                        <Route path="/Threads" component = {ThreadsComponent} />
                        <Route path="/Register" component = {RegisterComponent} />
                        <Route path="/Users" component = {UsersComponent} />
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