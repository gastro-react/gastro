import agent from '../../agent'
import { APPLY_TAG_FILTER } from '../../utils/constants/actionTypes'

export const applyTagFilter = (tag, page) => {
  return (dispatch) => {
    Promise.all([agent.Articles.byTag(tag, page), agent.Articles.byTag(tag)])
      .then(([pager, payload]) =>
        dispatch({
          type: APPLY_TAG_FILTER,
          payload: {
            tag,
            pager,
            articles: pager.articles,
            articlesCount: pager.articlesCount,
          },
        })
      )
      .catch((e) => console.log(e))
  }
}
