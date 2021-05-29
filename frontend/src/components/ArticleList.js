import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import ListPagination from './ListPagination'
import ArticlePreview from './ArticlePreview/ArticlePreview.jsx'

const ArticleWrap = styled.div`
  width: 100%;
  display: flex;
  padding: 20px 4px;
`

const ArticleList = () => {
  const { articles } = useSelector((state) => state.articleList)

  if (!articles) return <ArticleWrap>Loading...</ArticleWrap>
  if (articles.length === 0)
    return <ArticleWrap> No articles are here... yet.</ArticleWrap>

  return (
    <>
      {articles.map((article) => (
        <ArticlePreview article={article} key={article.slug} />
      ))}
      <ListPagination />
    </>
  )
}

export default ArticleList
