import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger'
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';


import CommentsReducer from '../pages/Thread/reducers/CommentsReducer';


const store = createStore(
    combineReducers({
        CommentsReducer
    }),
    {},
    applyMiddleware(logger,thunk,promise())

);

export default store;