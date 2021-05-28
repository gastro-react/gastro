import agent from '../../agent'
import {SETTINGS_SAVED} from '../../utils/constants/actionTypes'

export const settingsSave = (user) => {
  return (dispatch) => {
    Promise.resolve(agent.Auth.save(user))
      .then((payload) => dispatch({ type: SETTINGS_SAVED, payload: payload }))
      .catch((e) => console.log(e))
  }
}
``
