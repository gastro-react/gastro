import ArticleMeta from './ArticleMeta'
import CommentContainer from './CommentContainer'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import marked from 'marked'
import {
  REDIRECT,
  ARTICLE_PAGE_UNLOADED,
} from '../../utils/constants/actionTypes'
import styled from 'styled-components'
import ArticleActions from './ArticleActions'
import imagePots from './pots.jpg'
import { getAllArticleInfo } from '../../services/actions/getAllArticleInfo'

const ArticleWrap = styled.div`
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 0 16px;
  font-family: 'Suisse Intl', sans-serif;
  font-style: normal;
  font-weight: 450;
`
const Banner = styled.div`
  color: #fff;
  background: #1c1c22;
`
const MetaContainer = styled.div`
  margin: 0 auto;
  padding: 32px 0 32px 16px;
  box-sizing: border-box;
  display: flex;
  max-width: 1140px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  color: #fff;
`

const ArticleTitle = styled.h1`
  font-family: 'Spectral', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 40px;
  margin: 0;
  padding: 16px 0;
  color: #0a0a0b;
`
const ArticleImage = styled.img`
  width: 100%;
  height: auto;
`
const ArticleContent = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 16px 0;
  color: #0a0a0b;
`
const TagList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-content: center;
`
const TagListItem = styled.li`
  background: #f4f4f6;
  border: 1px solid #e0e0e0;
  border-radius: 100px;
  margin: 0 4px;
  padding: 4px 8px;
`
const CommentsWrap = styled.section`
  margin: 0 auto;
  padding: 0;
  max-width: 728px;
`

const Article = (props) => {
  const { article } = useSelector((state) => state.article)
  const { currentUser } = useSelector((state) => state.common)
  const { redirectTo } = useSelector((state) => state.common)
  const dispatch = useDispatch()
  const history = useHistory()

  const [markup, setMarkup] = useState({ __html: marked('') })
  const [canModify, setCanModify] = useState(false)

  useEffect(() => {
    if (redirectTo) {
      history.push(redirectTo)
      dispatch({ type: REDIRECT })
    }
  }, [redirectTo])

  useEffect(() => {
    dispatch(getAllArticleInfo(props.match.params.id))
    return dispatch({ type: ARTICLE_PAGE_UNLOADED })
  }, [])

  useEffect(() => {
    if (article) {
      setMarkup({ __html: marked(article.body, { sanitize: true }) })
      setCanModify(
        currentUser && currentUser.username === article.author.username
      )
    }
  }, [article])

  return !article ? null : (
    <>
      <Banner>
        <MetaContainer>
          <ArticleMeta
            author={article.author}
            createdAt={article.createdAt}
            theme="dark"
          />
          <ArticleActions canModify={canModify} article={article} />
        </MetaContainer>
      </Banner>
      <ArticleWrap>
        <ArticleTitle>{article.title}</ArticleTitle>
        <ArticleImage src={imagePots} alt={article.title} />
        <ArticleContent>
          <div dangerouslySetInnerHTML={markup} />
          <TagList>
            {article.tagList.map((tag) => {
              return <TagListItem key={tag}>{tag}</TagListItem>
            })}
          </TagList>
        </ArticleContent>
        <CommentsWrap>
          <CommentContainer
            comments={props.comments || []}
            errors={props.commentErrors}
            slug={props.match.params.id}
            currentUser={currentUser}
          />
        </CommentsWrap>
      </ArticleWrap>
    </>
  )
}

export default Article
