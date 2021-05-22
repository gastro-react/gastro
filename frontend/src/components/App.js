import agent from '../agent';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { APP_LOAD, REDIRECT } from '../constants/actionTypes';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Article from './Article';
import Editor from './Editor';
import Home from './Home/index';
import Login from './Login';
import Profile from './Profile';
import ProfileFavorites from './ProfileFavorites';
import Register from './Register';
import Settings from './Settings';

  const App = () => {
    const dispatch = useDispatch();
    const { appLoaded, appName, currentUser, redirectTo } = useSelector(state => state.common)
    
    useEffect(() => {
      const token = window.localStorage.getItem('jwt');
      if (token) {
        agent.setToken(token);
      }
      dispatch({ type: APP_LOAD, payload: token ? agent.Auth.current() : null, token, skipTracking: true })
    }, [])

    return appLoaded
      ? (
        <>
          <Header
            appName={appName}
            currentUser={currentUser} />
          <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/editor/:slug" component={Editor} />
          <Route path="/editor" component={Editor} />
          <Route path="/article/:id" component={Article} />
          <Route path="/settings" component={Settings} />
          <Route path="/@:username/favorites" component={ProfileFavorites} />
          <Route path="/@:username" component={Profile} />
          </Switch>
        </>
      )
      : (
          <Header
            appName={appName}
            currentUser={currentUser} />
      )
}

export default App;
