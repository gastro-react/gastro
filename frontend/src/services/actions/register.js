import agent from '../../agent';
import {
	REGISTER,
} from '../../utils/constants/actionTypes';


export const register = (username, email, password) => {
	return (dispatch) => {
		Promise.resolve(agent.Auth.register(username, email, password))
					 .then((payload) => dispatch({ type: REGISTER, payload: payload }))
					 .catch(e => console.log(e))
	}
}
