import { createStore, applyMiddleware, compose } from 'redux';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import { autoRehydrate } from 'redux-persist';

import rootReducer from './rootReducer';
import { env } from './config/config';
// Api middleware
import { apiMiddlewareHook } from './helpers/api.call';
// // Page Middleware
import loginMiddleware from './views/Site/Login/_loginMiddleware';
import signupMiddleware from './views/Site/Signup/_signupMiddleware';
// Parial Middleware
import asideMiddleware from './views/Cms/_Parts/Aside/_asideMiddleware';
// Full layout Middleware
import fullMiddleware from './layouts/Full/_fullMiddleware';

// Apply the middleware to the store
const middleware = routerMiddleware(browserHistory);
/* eslint-disable no-underscore-dangle */
const composeEnhancers = env === 'local' || env === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose;

export const store = createStore(
  rootReducer,
  undefined, // initialState = undefined, it will be passed by default arguments of side-reducer
  composeEnhancers(
    applyMiddleware(middleware),
    applyMiddleware(apiMiddlewareHook),
    applyMiddleware(fullMiddleware),
    applyMiddleware(asideMiddleware),
    applyMiddleware(loginMiddleware),
    applyMiddleware(signupMiddleware),
    autoRehydrate()
  )
);
console.log('store', store.getState())
export const history = syncHistoryWithStore(browserHistory, store);
