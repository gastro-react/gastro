import ArticleList from '../ArticleList';
import styled from 'styled-components';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllArticlesOnTabChange, getFeedArticlesOnTabChange } from '../../services/actions/getArticlesOnTabChange';

const NavItem = styled.li`
  padding: 0;
  float: left;
`
const NavLink = styled.a`
  border-radius: 0;
  border: none;
  border-bottom: 2px solid transparent;
  background: 0 0;
  color: #aaa;
  display: block;
  padding: 8px 16px;
  text-decoration: none;
  ${props => props.active && 
  `
  background: #fff !important;
  border-bottom: 2px solid #5cb85c !important;
  color: #5cb85c !important;
   
  `}
`

const YourFeedTab = ({ token, tab, onTabClick }) => (
  token 
    ? (
      <NavItem>
        <NavLink href="" active={tab === 'feed'} onClick={onTabClick}>
          Your Feed
        </NavLink>
      </NavItem>
    )
    : null
)

const GlobalFeedTab = ({ onTabClick, tab}) => (
    <NavItem>
      <NavLink href="" active={ tab === 'all' } onClick={onTabClick}>
        Global Feed
      </NavLink>
    </NavItem>
  );

const TagFilterTab = ({ tag }) => (
  tag
  ? (
    <NavItem>
      <a href="" className="nav-link active">
        <i className="ion-pound"></i> {tag}
      </a>
    </NavItem>
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
