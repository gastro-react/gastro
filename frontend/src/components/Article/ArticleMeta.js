import { Link } from 'react-router-dom'
import React from 'react'
import styled from 'styled-components'
import CookIcon from '../AvatarIcons/CookIcon'
import { SuisseNormalMediumText } from '../../ui'

const ArticleMetaWrap = styled.div`
  display: flex;
  justify-content: space-between;
`

const ArticleInfo = styled.div`
  margin-left: 8px;
`

const ArticleDate = styled(SuisseNormalMediumText)`
  color: ${(props) => (props.theme === 'dark' ? '#fff' : '#62626A')};
`

const NavLink = styled(SuisseNormalMediumText)`
  text-decoration: none;
  color: ${(props) => (props.theme === 'dark' ? '#fff' : '#0A0A0B')};
`
const Img = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 100%;
`

const ArticleMeta = (props) => {
  const { author, createdAt, theme } = props
  return (
    <ArticleMetaWrap>
      <NavLink to={`/@${author.username}`}>
        {author.image ? (
          <Img src={author.image} alt={author.username} />
        ) : (
          <CookIcon />
        )}
      </NavLink>
      <ArticleInfo>
        <NavLink as={Link} theme={theme} to={`/@${author.username}`}>
          {author.username}
        </NavLink>
        <ArticleDate theme={theme}>
          {new Date(createdAt).toDateString()}
        </ArticleDate>
      </ArticleInfo>
    </ArticleMetaWrap>
  )
}

export default ArticleMeta
