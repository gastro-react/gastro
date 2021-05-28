import agent from '../../agent'
import { ARTICLE_PAGE_LOADED } from '../../utils/constants/actionTypes'

export const getAllArticleInfo = (paramsId) => {
  return (dispatch) => {
    Promise.all([
      agent.Articles.get(paramsId),
      agent.Comments.forArticle(paramsId),
    ])
      .then((payload) => dispatch({ type: ARTICLE_PAGE_LOADED, payload }))
      .catch((e) => console.log(e))
  }
}
