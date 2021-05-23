
import ListPagination from './ListPagination';
import { useSelector } from 'react-redux';
import React from 'react';
import ArticlePreview from "./ArticlePreview/ArticlePreview.jsx";

const ArticleList = () => {
  const { pager, articles, articlesCount, currentPage } = useSelector(state => state.articleList)

  if (!articles) {
    return (
      <div className="article-preview">Loading...</div>
    );
  }

  if (articles.length === 0) {
    return (
      <div className="article-preview">
        No articles are here... yet.
      </div>
    );
  }
  return (
    <div>
      {
        articles.map(article => {
          return (
            <ArticlePreview article={article} key={article.slug} />
          );
        })
      }

      <ListPagination
        pager={pager}
        articlesCount={articlesCount}
        currentPage={currentPage} />
    </div>
  );
};

export default ArticleList;
