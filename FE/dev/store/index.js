import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger'
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';


//import PlaceholderReducer from './reducers/PlaceholderReducer';


const store = createStore(
    combineReducers({
       // PlaceholderReducer
    }),
    {},
    applyMiddleware(logger,thunk,promise())

);

export default store;