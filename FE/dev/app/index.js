import React from 'react';
import AppRouter from '../router'
import store from '../store';
import {Provider} from 'react-redux';

import styles from './App.scss'

const App = ()=>(
    <div>
        <div className = {styles.app}>
            <Provider store = {store}>
                <AppRouter />
            </Provider>
        </div>

    </div>

);

export default App;