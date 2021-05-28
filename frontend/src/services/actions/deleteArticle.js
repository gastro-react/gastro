import agent from '../../agent'
import { DELETE_ARTICLE } from '../../utils/constants/actionTypes'

export const deleteArticle = (articleSlug) => {
  return (dispatch) => {
    agent.Articles.del(articleSlug)
      .then(() => dispatch({ type: DELETE_ARTICLE }))
      .catch((e) => console.log(e))
  }
}
