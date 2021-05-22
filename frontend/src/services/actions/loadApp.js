import agent from '../../agent';
import {
  APP_LOAD,
} from '../../constants/actionTypes';

export const loadApp = (token) => {
  return function(dispatch) {
    if (token) {
      agent.setToken(token);
    }
    dispatch({ type: APP_LOAD, payload: token ? agent.Auth.current() : null, token, skipTracking: true })
  };
}