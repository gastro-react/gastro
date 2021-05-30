import ArticleList from '../ArticleList'
import styled from 'styled-components'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getAllArticlesOnTabChange,
  getFeedArticlesOnTabChange,
} from '../../services/actions/getArticlesOnTabChange'
import { SuisseNormalMediumText } from '../UI'

const StyledMainView = styled.div`
  position: relative;
  padding: 0 15px;
  flex: 0 0 75%;
  max-width: 75%;
`
const Navigation = styled.nav`
  display: block;
  width: 100%;
`
const TabsList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  justify-content: flex-start;
`
const NavItem = styled.li`
  box-sizing: border-box;
  padding: 0;
  list-style-type: none;
  padding: 8px 16px;
  border-bottom: 2px solid transparent;
  color: #aaa;
  background: transparent;

  ${(props) =>
    props.active === true
      ? `
      border-bottom: 2px solid #000;
      color: #000;
    `
      : ''}
`
const NavLink = styled(SuisseNormalMediumText)`
  color: inherit;
  display: block;
  text-decoration: none;
  transition: transform 0.2s linear;

  &:hover {
    transform: scale(1.1);
  }
  &:active,
  &:visited {
    color: inherit;
  }
`
const YourFeedTab = ({ token, active, onTabClick }) =>
  token ? (
    <NavItem active={active} onClick={onTabClick}>
      <NavLink href="" onClick={() => {}}>
        Your Feed
      </NavLink>
    </NavItem>
  ) : null

const GlobalFeedTab = ({ onTabClick, active }) => (
  <NavItem active={active} onClick={onTabClick}>
    <NavLink as="a" href="" onClick={() => {}}>
      Global Feed
    </NavLink>
  </NavItem>
)

const TagFilterTab = ({ tag }) =>
  tag ? (
    <NavItem active={true}>
      <NavLink
        as="a"
        href=""
        onClick={(e) => {
          e.preventDefault()
        }}
      >
        {'# ' + tag}
      </NavLink>
    </NavItem>
  ) : null

const MainView = () => {
  const { token } = useSelector((state) => state.common)
  const { tag, tab } = useSelector((state) => state.articleList)
  const dispatch = useDispatch()

  const handleTabClick = (e, type) => {
    e.preventDefault()
    if (type === 'feed') dispatch(getFeedArticlesOnTabChange())
    if (type === 'all') dispatch(getAllArticlesOnTabChange())
  }

  return (
    <StyledMainView>
      <Navigation>
        <TabsList>
          <GlobalFeedTab
            active={tab === 'all'}
            onTabClick={(e) => handleTabClick(e, 'all')}
          />
          <YourFeedTab
            active={tab === 'feed'}
            token={token}
            onTabClick={(e) => handleTabClick(e, 'feed')}
          />
          <TagFilterTab tag={tag} />
        </TabsList>
      </Navigation>
      <ArticleList />
    </StyledMainView>
  )
}

export default MainView
