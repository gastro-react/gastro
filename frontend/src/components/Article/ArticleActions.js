import { Link } from 'react-router-dom';
import React from 'react';
import agent from '../../agent';
import { connect } from 'react-redux';
import { DELETE_ARTICLE } from '../../utils/constants/actionTypes';
import styled from 'styled-components';
import {EditIcon, TrashIcon} from "../Icons";

const Actions= styled.span`
  display: flex;
  gap: 8px;
  align-items: center;
`

const LinkEdit =styled(Link)`
  padding: 8px 16px;
  background-color: #ffff00;
  border-radius: 20px;
  color: #0a0a0b;
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  font-family: "Suisse Intl", sans-serif;
  font-style: normal;
  font-weight: 450;
  font-size: 16px;
  line-height: 24px;
`

const DeleteButton=styled.button`
  padding: 8px 0 8px 16px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  font-family: "Suisse Intl", sans-serif;
  font-style: normal;
  font-weight: 450;
  font-size: 16px;
  line-height: 24px;
  color: #F53D5C;
  background-color: #1C1C22;
  border: none;
  :hover {
    cursor: pointer;
  }
`



const mapDispatchToProps = dispatch => ({
  onClickDelete: payload =>
    dispatch({ type: DELETE_ARTICLE, payload })
});

const ArticleActions = props => {
  const article = props.article;
  const del = () => {
    props.onClickDelete(agent.Articles.del(article.slug))
  };
  if (props.canModify) {
    return (
      <Actions>
         <LinkEdit to={`/editor/${article.slug}`}>
          <EditIcon/> Edit Article
        </LinkEdit>
        <DeleteButton  onClick={del}>
          <TrashIcon color={'#F53D5C'}/> Delete Article
        </DeleteButton>
      </Actions>
    );
  }
  return (
    <span>
    </span>
  );
};

export default connect(() => ({}), mapDispatchToProps)(ArticleActions);
