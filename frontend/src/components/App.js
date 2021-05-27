import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Switch, useHistory } from 'react-router-dom';
import {REDIRECT} from '../utils/constants/actionTypes';
import Header from './Header';
import Article from './Article';
import Editor from './Editor';
import Home from './Home/index';
import Login from './Login';
import Profile from './Profile';
import ProfileFavorites from './ProfileFavorites';
import Register from './Register';
import Settings from './Settings';
import { loadApp } from '../services/actions/loadApp';

const App = () => {
	const dispatch = useDispatch();
	const { appLoaded } = useSelector(state => state.common)
	const {redirectTo } = useSelector(state => state.common)
	useEffect(() => {
		const token = window.localStorage.getItem('jwt');
		dispatch(loadApp(token));
	}, [])
	
	const history =  useHistory()
	
	useEffect(() => {
		if (redirectTo) {
			history.push(redirectTo);
			dispatch({type: REDIRECT})
		}
	}, [redirectTo])
	
	return appLoaded
		? (
			<>
				<Header />
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
			<Header />
		)
}

export default App;

