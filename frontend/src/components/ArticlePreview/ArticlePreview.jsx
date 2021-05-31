import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import CookIcon from '../AvatarIcons/CookIcon'
import LikeIcon from '../Icons/Like'
import Tag from '../Tag'
import { SpectralBoldMediumText, SuisseNormalMediumText } from '../../ui'
import { likeArticle, dislikeArticle } from '../../services/actions/likeArticle'
import { useDispatch } from 'react-redux'

const ArticlePreviewContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 20px 0;
  font-family: 'Spectral', serif;
`
const ArticleTitle = styled(SpectralBoldMediumText)`
  margin-top: 16px;
  margin-bottom: 8px;
  color: ${(p) => p.theme.colors.textPrimary};
  text-decoration: none;
`
const ArticleDetails = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
`
const ArticleMeta = styled.div`
  display: flex;
  justify-content: space-between;
`
const ImageThumbnail = styled.div`
  flex: 0 0 160px;
  height: 228px;
  background-color: ${(p) => p.theme.colors.articleBackground};
  border-radius: 20px;
  margin-right: 20px;
  background-size: cover;
  background-image: ${(p) => p.image};
`
const StyledInfo = styled.div`
  margin-left: 8px;
`
const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`
const AuthorAndInfo = styled.div`
  display: flex;
  align-items: flex-start;
`
const StyledAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 100%;
`
const Tags = styled.div`
  display: flex;
  gap: 4px;
  justify-content: flex-end;
  flex-wrap: wrap;
`
const StyledDateAndSecondary = styled(SuisseNormalMediumText)`
  color: ${(p) => p.theme.colors.textSecondary};
`
const ReadMore = styled(SuisseNormalMediumText)`
  color: ${(p) => p.theme.colors.textPrimary};
`
const Author = styled(SuisseNormalMediumText)`
  color: ${(p) => p.theme.colors.textPrimary};
  text-decoration: none;
`
const Favorites = styled(SuisseNormalMediumText)`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${(p) => p.theme.colors.textPrimary};
`
const ReadMoreAndTagsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const ArticlePreview = ({ article }) => {
  const dispatch = useDispatch()

  const handleClick = (e) => {
    e.preventDefault()
    if (article.favorited) {
      dispatch(dislikeArticle(article.slug))
    } else {
      dispatch(likeArticle(article.slug))
    }
  }

  const Avatar = () => (
    <StyledLink to={`/@${article.author.username}`}>
      {article.author.image ? (
        <StyledAvatar
          src={article.author.image}
          // className={styles.AutorsAvatar}
          alt={article.author.username}
        />
      ) : (
        <CookIcon />
      )}
    </StyledLink>
  )

  const ArticleInfo = () => (
    <StyledInfo>
      <Author as={Link} to={`/@${article.author.username}`}>
        {article.author.username}
      </Author>
      <StyledDateAndSecondary>
        {new Date(article.createdAt).toDateString()}
      </StyledDateAndSecondary>
    </StyledInfo>
  )

  return (
    <ArticlePreviewContainer>
      <ImageThumbnail
        image={article.image ? `url(${article.image})` : 'none'}
      />
      <ArticleDetails>
        <div>
          <ArticleMeta>
            <AuthorAndInfo>
              <Avatar />
              <ArticleInfo />
            </AuthorAndInfo>

            <Favorites as="div" onClick={handleClick}>
              {article.favoritesCount}
              <LikeIcon liked={article.favorited} width={'48'} />
            </Favorites>
          </ArticleMeta>

          <StyledLink to={`/article/${article.slug}`} className="preview-link">
            <ArticleTitle as="h3">{article.title}</ArticleTitle>
            <StyledDateAndSecondary>
              {article.description}
            </StyledDateAndSecondary>
          </StyledLink>
        </div>

        <ReadMoreAndTagsContainer>
          <StyledLink to={`/article/${article.slug}`}>
            <ReadMore>Read more...</ReadMore>
          </StyledLink>
          <Tags>
            {article.tagList.map((tag) => (
              <Tag key={tag} tag={tag} />
            ))}
          </Tags>
        </ReadMoreAndTagsContainer>
      </ArticleDetails>
    </ArticlePreviewContainer>
  )
}

export default ArticlePreview
