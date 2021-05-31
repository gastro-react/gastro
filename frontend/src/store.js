import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import { promiseMiddleware, localStorageMiddleware } from './middleware'
import reducer from './reducer'
// import { routerMiddleware } from 'react-router-redux'
import { routerMiddleware } from 'connected-react-router'
// import createHistory from 'history/createBrowserHistory';
import { createBrowserHistory } from 'history'
export const history = createBrowserHistory()

// Build the middleware for intercepting and dispatching navigation actions
const myRouterMiddleware = routerMiddleware(history)

const getMiddleware = () => {
  if (process.env.NODE_ENV === 'production') {
    return applyMiddleware(
      thunk,
      myRouterMiddleware,
      promiseMiddleware,
      localStorageMiddleware
    )
  } else {
    // Enable additional logging in non-production environments.
    return applyMiddleware(
      thunk,
      myRouterMiddleware,
      promiseMiddleware,
      localStorageMiddleware
    )
  }
}

export const store = createStore(reducer, composeWithDevTools(getMiddleware()))
