import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import CookIcon from "../AvatarIcons/CookIcon";
import {useSelector} from "react-redux";


const ArticleMetaWrap= styled.div`
  font-family: "Suisse Intl", sans-serif;
  display: flex;
  justify-content: space-between;
`

const ArticleInfo =styled.div`
  margin-left: 8px;
`

const ArticleDate =styled.div`
  font-family: inherit;
  font-size: 12px;
  line-height: 16px;
 color: ${props => props.theme ==='dark' ? '#fff' : '#62626A'};
`

const NavLink = styled(Link)`
  font-family: inherit;
  font-size: 16px;
  font-style: normal;
  font-weight: 450;
  line-height: 24px;
  text-decoration: none;
  color: ${props => props.theme ==='dark' ? '#fff' : '#0A0A0B'};
`
const Img =styled.img`
  width: 40px;
  height: 40px;
  border-radius: 100%;
`

const ArticleMeta = (props) => {
    const {author, createdAt, theme} = props;
  return (
          <ArticleMetaWrap >
              <NavLink to={`/@${author.username}`}>
                  { author.image ?
                      <Img src={author.image} alt={author.username} /> : <CookIcon />
                  }
              </NavLink>
              <ArticleInfo>
                  <NavLink  theme={theme} to={`/@${author.username}`}>
                      {author.username}
                  </NavLink>
                  <ArticleDate theme={theme}>
                      {new Date(createdAt).toDateString()}
                  </ArticleDate>
              </ArticleInfo>
          </ArticleMetaWrap>
  );
};

export default ArticleMeta;
