import agent from '../../agent';
import {
  CHANGE_TAB,
} from '../../constants/actionTypes';

export const getFeedArticlesOnTabChange = () => {
  return function(dispatch) {
    Promise.all([agent.Articles.feed, agent.Articles.feed()])
      .then(([pager, payload]) => dispatch({ 
        type: CHANGE_TAB,
        tab: 'feed',
        pager,
        payload
      }))
      .catch(e => console.log(e))
  };
}
export const getAllArticlesOnTabChange = () => {
  return function(dispatch) {
    Promise.all([agent.Articles.all, agent.Articles.all()])
    .then(([pager, payload]) => dispatch({ 
      type: CHANGE_TAB,
      tab: 'all',
      pager,
      payload
    }))
    .catch(e => console.log(e))
  };
}