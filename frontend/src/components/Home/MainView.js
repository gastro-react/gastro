import ArticleList from '../ArticleList';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllArticlesOnTabChange, getFeedArticlesOnTabChange } from '../../services/actions/getArticlesOnTabChange';

const YourFeedTab = ({ token, tab, onTabClick }) => (
  token 
    ? (
      <li className="nav-item">
        <a  href=""
            className={ tab === 'feed' ? 'nav-link active' : 'nav-link' }
            onClick={onTabClick}>
          Your Feed
        </a>
      </li>
    )
    : null
)

const GlobalFeedTab = ({ onTabClick, tab}) => (
    <li className="nav-item">
      <a
        href=""
        className={ tab === 'all' ? 'nav-link active' : 'nav-link' }
        onClick={onTabClick}>
        Global Feed
      </a>
    </li>
  );

const TagFilterTab = ({ tag }) => (
  tag
  ? (
    <li className="nav-item">
      <a href="" className="nav-link active">
        <i className="ion-pound"></i> {tag}
      </a>
    </li>
  )
  : null
)

const MainView = () => {
  const { token } = useSelector(state => state.common)
  const { pager, articles, loading, articlesCount, currentPage, tag, tab} = useSelector(state => state.articleList)
  const dispatch = useDispatch();

  const handleTabClick = (e, type) => {
    e.preventDefault();
    if (type === 'feed') dispatch(getFeedArticlesOnTabChange());
    if (type === 'all') dispatch(getAllArticlesOnTabChange());
  }


  return (
    <div className="col-md-9">
      <div className="feed-toggle">
        <ul className="nav nav-pills outline-active">
          <YourFeedTab token={token} tab={tab} onTabClick={e => handleTabClick(e, 'feed')} />
          <GlobalFeedTab tab={tab} onTabClick={e => handleTabClick(e, 'all')} />
          <TagFilterTab tag={tag} />
        </ul>
      </div>

      <ArticleList
        pager={pager}
        articles={articles}
        loading={loading}
        articlesCount={articlesCount}
        currentPage={currentPage} />
    </div>
  );
};

export default MainView;
