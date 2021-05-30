import {
  TOGGLE_THEME,
} from '../../utils/constants/actionTypes'

const initialState = {
  active: 'light',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        active: state.active === 'light' ? 'dark' : 'light',
      }
    default:
      return state
  }
}