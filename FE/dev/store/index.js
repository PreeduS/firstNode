import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger'
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';


import CommentsReducer from '../pages/Thread/reducers/CommentsReducer'; //Thread
import ThreadReducer from '../pages/Thread/reducers/ThreadReducer';     //Thread
import UserReducer from '../commons/reducers/UserReducer';


const store = createStore(
    combineReducers({
        CommentsReducer,
        ThreadReducer,
        UserReducer
    }),
    {},
    applyMiddleware(logger,thunk,promise())

);

export default store;