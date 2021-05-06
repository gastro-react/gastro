import React from 'react';
import { Link } from 'react-router-dom';
import agent from '../../agent';
import { connect } from 'react-redux';
import { ARTICLE_FAVORITED, ARTICLE_UNFAVORITED } from '../../constants/actionTypes';
import styles from './ArticlePreview.module.css'
import CookIcon from "../AvatarIcons/CookIcon";
import LikeIcon from "../Icons/Like";


const mapDispatchToProps = dispatch => ({
  favorite: slug => dispatch({
    type: ARTICLE_FAVORITED,
    payload: agent.Articles.favorite(slug)
  }),
  unfavorite: slug => dispatch({
    type: ARTICLE_UNFAVORITED,
    payload: agent.Articles.unfavorite(slug)
  })
});

const ArticlePreview = props => {
  const article = props.article;

  const handleClick = ev => {
    ev.preventDefault();
    if (article.favorited) {
      props.unfavorite(article.slug);
    } else {
      props.favorite(article.slug);
    }
  };

  return (
    <div className={styles.ArticlePreviewContainer}>
      <div className={styles.ImageThumbnail} />
      <div className={styles.ArticleDetails}>
        <div>
          <div className={styles.ArticleMeta}>
            <div className={styles.AuthorAndInfo}>
              <Link to={`/@${article.author.username}`}>
                { article.author.image ?
                    <img src={article.author.image} alt={article.author.username} /> : <CookIcon />
                }
              </Link>

              <div className={styles.ArticleInfo}>
                <Link className={styles.ArticleAuthor} to={`/@${article.author.username}`}>
                  {article.author.username}
                </Link>
                <div className={styles.ArticleDate}>
                  {new Date(article.createdAt).toDateString()}
                </div>
              </div>
            </div>

            <div className={styles.Favorites} onClick={handleClick}>
              {article.favoritesCount}
              <LikeIcon liked={article.favorited} width={48} />
            </div>
          </div>

          <Link to={`/article/${article.slug}`} className="preview-link">
            <div className={styles.ArticleTitle}>{article.title}</div>
            <p>{article.description}</p>
          </Link>

        </div>

        <div className={styles.ReadMoreAndTagsContainer}>
          <Link to={`/article/${article.slug}`}>
            <div className={styles.ReadMore}>
              Read more...
            </div>
          </Link>
          <ul className="tag-list">
            {
              article.tagList.map(tag => {
                return (
                    <li className={styles.ArticleTag} key={tag}>
                      {tag}
                    </li>
                )
              })
            }
          </ul>
        </div>
      </div>

    </div>
  );
}

export default connect(() => ({}), mapDispatchToProps)(ArticlePreview);
