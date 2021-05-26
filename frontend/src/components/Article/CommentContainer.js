import CommentInput from './CommentInput';
import CommentList from './CommentList';
import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import {useSelector} from "react-redux";


const CommentsTitle=styled.h3`
  font-family: "Spectral", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0;
  margin : 32px 0;
`


const CommentContainer = props => {
    const {currentUser} = useSelector(state => state.common)

  if (currentUser) {
    return (
      <>
          <CommentsTitle>Comments</CommentsTitle>
        <div>
          {/*<list-errors errors={props.errors}></list-errors>*/}
          <CommentInput />
        </div>

        <CommentList
          comments={props.comments}
          slug={props.slug}
          currentUser={props.currentUser} />
      </>
    );
  } else {
    return (
      <>
          <CommentsTitle>Comments</CommentsTitle>
        <p>
          <Link to="/login">Sign in</Link>
          &nbsp;or&nbsp;
          <Link to="/register">sign up</Link>
          &nbsp;to add comments on this article.
        </p>

        <CommentList
          comments={props.comments}
          slug={props.slug}
          currentUser={props.currentUser} />
      </>
    );
  }
};

export default CommentContainer;
