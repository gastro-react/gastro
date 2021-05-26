import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

function SettingsForm ({onSubmitForm}) {
	const {currentUser} = useSelector(state=> state.common)
	const settings = useSelector(state=> state.settings)
	
	const [state, setState] = useState({
		image: '',
		username: '',
		bio: '',
		email: '',
		password: ''
	})
	
	
	const updateState = field => ev => {
		const newState = Object.assign({}, state, { [field]: ev.target.value });
		setState(newState);
	};
	
	const submitForm = ev => {
		ev.preventDefault();
		const user = Object.assign({}, state);
		if (!user.password) {
			delete user.password;
		}
		onSubmitForm(user);
	};
	
	useEffect(()=>{
		if (currentUser) {
			Object.assign(state, {
				image: currentUser.image || '',
				username: currentUser.username,
				bio: currentUser.bio,
				email: currentUser.email
			});
		}
	}, [currentUser])
	
	return (
		<form onSubmit={submitForm}>
			<fieldset>
				<fieldset className="form-group">
					<input
						className="form-control"
						type="text"
						placeholder="URL of profile picture"
						value={state.image}
						onChange={updateState('image')} />
				</fieldset>
				<fieldset className="form-group">
					<input
						className="form-control form-control-lg"
						type="text"
						placeholder="Username"
						value={state.username}
						onChange={updateState('username')} />
				</fieldset>
				<fieldset className="form-group">
					<textarea
						className="form-control form-control-lg"
						rows="8"
						placeholder="Short bio about you"
						value={state.bio}
						onChange={updateState('bio')}>
					</textarea>
				</fieldset>
				<fieldset className="form-group">
					<input
						className="form-control form-control-lg"
						type="email"
						placeholder="Email"
						value={state.email}
						onChange={updateState('email')} />
				</fieldset>
				<fieldset className="form-group">
					<input
						className="form-control form-control-lg"
						type="password"
						placeholder="New Password"
						value={state.password}
						onChange={updateState('password')} />
				</fieldset>
				<button
					className="btn btn-lg btn-primary pull-xs-right"
					type="submit"
					// disabled={settings.inProgress}
				>
					Update Settings
				</button>
			</fieldset>
		</form>
	);
}

export default SettingsForm
