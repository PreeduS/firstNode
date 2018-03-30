import React from 'react';

import AppRouter from '../router'

import styles from './App.scss'

const App = ()=>(
    <div>
        <div className = {styles.app}>
            <AppRouter />
        </div>

    </div>

);

export default App;