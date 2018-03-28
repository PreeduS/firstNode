
import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom';

import ThreadComponent from '../pages/Thread';

// / <NavLink exact activeClassName = {styles.routeActive} to="/Thread" >ThreadComponent</NavLink>

const AppRouter = () =>(
    <Router>
        <div>
            <div>
                <NavLink exact  to="/Thread" >ThreadComponent</NavLink>
                <NavLink exact  to="/" >null</NavLink>
            </div>
            <hr />
            <div>
                <Switch>
                    <Route path="/Thread" component = {ThreadComponent} />
                    <Route path="/" render = {()=> <div>Null /</div>} />
                </Switch>
            </div>

        </div>
    </Router>
)

export default AppRouter;