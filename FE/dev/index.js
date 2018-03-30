import React from 'react';
import ReactDOM from 'react-dom';

//import store from './store';
//import {Provider} from 'react-redux';

import App from './app';

import './commons/styles/global.scss';


ReactDOM.render(
  
         <App />
  
, document.getElementById('app'));

/*
    <Provider store = {store}>
         <App />
    </Provider>
    */