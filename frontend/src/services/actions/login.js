import agent from '../../agent';
import {
	LOGIN,
} from '../../utils/constants/actionTypes';


export const login = (email, password) => {
	return (dispatch) => {
		Promise.resolve(agent.Auth.login(email, password))
				 .then((payload) => dispatch({ type: LOGIN, payload: payload }))
				 .catch(e => console.log(e))
	}
}
