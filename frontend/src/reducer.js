import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'

import article from './services/reducers/article'
import articleList from './services/reducers/articleList'
import auth from './services/reducers/auth'
import common from './services/reducers/common'
import editor from './services/reducers/editor'
import home from './services/reducers/home'
import profile from './services/reducers/profile'
import settings from './services/reducers/settings'
// import { routerReducer } from 'react-router-redux';
// import { routerReducer } from 'connected-react-router';
// import {history} from "./store";

const history = createBrowserHistory()

export default combineReducers({
  article,
  articleList,
  auth,
  common,
  editor,
  home,
  profile,
  settings,
  router: connectRouter(history),
})
