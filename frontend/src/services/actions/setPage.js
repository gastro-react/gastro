import agent from '../../agent'
import { SET_PAGE } from '../../utils/constants/actionTypes'

export const setPage = (page) => (dispatch) =>
  agent.Articles.all(page).then((articles) =>
    dispatch({
      type: SET_PAGE,
      payload: {
        ...articles,
        page,
      },
    })
  )
