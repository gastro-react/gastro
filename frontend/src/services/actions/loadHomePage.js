import agent from '../../agent';
import {
  HOME_PAGE_LOADED,
} from '../../constants/actionTypes';


export const loadHomePage = (token) => {
  const tab = token ? 'feed' : 'all';
  const articlesPromise = token 
    ? agent.Articles.feed
    : agent.Articles.all;
  
  return (dispatch) => {
    Promise.all([agent.Tags.getAll(), articlesPromise()])
      .then(([tagsObj, pager]) => dispatch({ 
        type: HOME_PAGE_LOADED,
        payload: {
          tab,
          pager,
          tags: tagsObj.tags,
          articles: pager.articles,
          articlesCount: pager.articlesCount,
        }
      }))
      .catch(e => console.log(e))
  }
}