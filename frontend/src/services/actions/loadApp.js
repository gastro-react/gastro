import agent from '../../agent'
import { APP_LOAD } from '../../utils/constants/actionTypes'

export const loadApp = (token) => {
  return (dispatch) => {
    if (token) {
      agent.setToken(token)
    }
    dispatch({
      type: APP_LOAD,
      payload: token ? agent.Auth.current() : null,
      skipTracking: true,
      token,
    })
  }
}
