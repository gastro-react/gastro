import agent from '../../agent'
import {
  ARTICLE_FAVORITED,
  ARTICLE_UNFAVORITED, 
} from '../../utils/constants/actionTypes'

export const likeArticle = (slug) => {
  return (dispatch) => {
    dispatch({
      type: ARTICLE_FAVORITED,
      payload: agent.Articles.favorite(slug),
    })
  }
}
export const dislikeArticle = (slug) => {
  return (dispatch) => {
    dispatch({
      type: ARTICLE_UNFAVORITED,
      payload: agent.Articles.unfavorite(slug),
    })
  }
}