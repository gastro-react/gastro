import { Link } from 'react-router-dom';
import ListErrors from './ListErrors';
import React, {useState, useEffect} from 'react';
import agent from '../agent';
import {  useDispatch, useSelector } from 'react-redux';
import {
  LOGIN,
  LOGIN_PAGE_UNLOADED
} from '../utils/constants/actionTypes';
import {login} from '../services/actions/login'

function Login () {
	
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const dispatch = useDispatch()
	const auth = useSelector(state=> state.auth)
	const changeEmail = ev => setEmail(ev.target.value);
	const changePassword = ev => setPassword(ev.target.value);
	const submitForm = (email, password) => ev => {
			ev.preventDefault ();
		dispatch( login(email, password) )
		}
		
		useEffect(()=>{
			return ()=> dispatch({ type: LOGIN_PAGE_UNLOADED })
		},[])
		
			return (
				<div className="auth-page">
					<div className="container page">
						<div className="row">
							<div className="col-md-6 offset-md-3 col-xs-12">
								<h1 className="text-xs-center">Sign In</h1>
								<p className="text-xs-center">
									<Link to="/register">
										Need an account?
									</Link>
								</p>
								<ListErrors errors={auth.errors}/>
								<form onSubmit={submitForm (email, password)}>
									<fieldset>
										<fieldset className="form-group">
											<input
												className="form-control form-control-lg"
												type="email"
												placeholder="Email"
												value={email || ''}
												onChange={changeEmail}
											/>
										</fieldset>
										<fieldset className="form-group">
											<input
												className="form-control form-control-lg"
												type="password"
												placeholder="Password"
												value={password || ''}
												onChange={changePassword}
											/>
										</fieldset>
										<button
											className="btn btn-lg btn-primary pull-xs-right"
											type="submit"
											disabled={auth.inProgress}
										>
											Sign in
										</button>
									</fieldset>
								</form>
							</div>
						</div>
					</div>
				</div>
			);
}

export default Login;
