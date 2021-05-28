import agent from '../../agent'
import { CHANGE_TAB } from '../../utils/constants/actionTypes'

export const getFeedArticlesOnTabChange = () => {
  return function (dispatch) {
    Promise.all([agent.Articles.feed, agent.Articles.feed()])
      .then(([pager, articlesArr]) =>
        dispatch({
          type: CHANGE_TAB,
          payload: {
            tab: 'feed',
            pager,
            articles: articlesArr.articles,
            articlesCount: articlesArr.articlesCount,
          },
        })
      )
      .catch((e) => console.log(e))
  }
}
export const getAllArticlesOnTabChange = () => {
  return function (dispatch) {
    Promise.all([agent.Articles.all, agent.Articles.all()])
      .then(([pager, articlesArr]) =>
        dispatch({
          type: CHANGE_TAB,
          payload: {
            tab: 'all',
            pager,
            articles: articlesArr.articles,
            articlesCount: articlesArr.articlesCount,
          },
        })
      )
      .catch((e) => console.log(e))
  }
}
