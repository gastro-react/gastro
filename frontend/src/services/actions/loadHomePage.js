import agent from '../../agent';
import {
  HOME_PAGE_LOADED,
} from '../../constants/actionTypes';


export const loadHomePage = (token) => {
  const tab = token ? 'feed' : 'all';
  const articlesPromise = token 
    ? agent.Articles.feed
    : agent.Articles.all;
  
  return function(dispatch) {
    Promise.all([agent.Tags.getAll(), articlesPromise()])
      .then(res => dispatch({ 
        type: HOME_PAGE_LOADED,
        tab,
        pager: articlesPromise,
        payload: res
      }))
      .catch(e => console.log(e))
  }
}