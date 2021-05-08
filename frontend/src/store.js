import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { promiseMiddleware, localStorageMiddleware } from './middleware';
import reducer from './reducer';
// import { routerMiddleware } from 'react-router-redux'
import { routerMiddleware } from 'connected-react-router'
// import createHistory from 'history/createBrowserHistory';
import {createBrowserHistory} from 'history';
export const history = createBrowserHistory();



import article from './reducers/article';
import articleList from './reducers/articleList';
import auth from './reducers/auth';
import { combineReducers } from 'redux';
import common from './reducers/common';
import editor from './reducers/editor';
import home from './reducers/home';
import profile from './reducers/profile';
import settings from './reducers/settings';
// import { routerReducer } from 'react-router-redux';
// import { routerReducer } from 'connected-react-router';
import { connectRouter } from 'connected-react-router'



// Build the middleware for intercepting and dispatching navigation actions
const myRouterMiddleware = routerMiddleware(history);

const getMiddleware = () => {
  if (process.env.NODE_ENV === 'production') {
    return applyMiddleware(myRouterMiddleware, promiseMiddleware, localStorageMiddleware);
  } else {
    // Enable additional logging in non-production environments.
    return applyMiddleware(myRouterMiddleware, promiseMiddleware, localStorageMiddleware, createLogger())
  }
};

export const store = createStore(
	combineReducers({
		article,
		articleList,
		auth,
		common,
		editor,
		home,
		profile,
		settings,
		router: connectRouter(history)
	}), composeWithDevTools(getMiddleware()));
