import { HOME_PAGE_LOADED, HOME_PAGE_UNLOADED } from '../constants/actionTypes';

export default (state = { tags: null }, action) => {
  switch (action.type) {
    case HOME_PAGE_LOADED:
      return {
        ...state,
        tags: action.payload.tags || null,
      };
    case HOME_PAGE_UNLOADED:
      return state;
    default:
      return state;
  }
};
