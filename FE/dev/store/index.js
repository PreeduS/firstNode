import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger'
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';

import rootReducers from './rootReducers';

const store = createStore(
    combineReducers({
        ...rootReducers
    }),
    {},
    applyMiddleware(logger,thunk,promise())

);

export default store;