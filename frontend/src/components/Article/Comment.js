import DeleteButton from './DeleteButton';
import React from 'react';
import {useSelector} from "react-redux";
import ArticleMeta from "./ArticleMeta";
import styled    from "styled-components";


const Card = styled.div`
border: 1px solid #F4F4F6;
  border-radius: 20px;
  box-sizing: border-box;
  padding: 24px;
  margin-bottom: 32px;
`

const CardHeader=styled.div`
display: flex;
  justify-content: space-between;

`

const CommentContent=styled.p`
color: #62626A;
  line-height: 24px;
  margin: 24px 0 0;
`

const Comment = props => {

    const {currentUser} = useSelector( state => state.common);
    const {slug} = useSelector(state => state.article.article)
  const comment = props.comment;
  const show = currentUser &&
    currentUser.username === comment.author.username;
  return (
    <Card >
        <CardHeader>
            <ArticleMeta author={comment.author} createdAt={comment.createdAt} theme='light'/>
            <DeleteButton show={show} slug={slug} commentId={comment.id} />
        </CardHeader>
        <CommentContent>{comment.body}</CommentContent>
    </Card >
  );
};

export default Comment;
