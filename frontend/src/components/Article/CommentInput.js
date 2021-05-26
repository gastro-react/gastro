import React, {useState} from 'react';
import agent from '../../agent';
import { useSelector, useDispatch} from 'react-redux';
import { ADD_COMMENT } from '../../utils/constants/actionTypes';
import ArticleMeta from "./ArticleMeta";
import styled from 'styled-components'


const Form=styled.form`
  margin-bottom: 32px;
  padding: 0;
  border: 1px solid #E0E0E0;
  border-radius: 20px;
`
const CardFooter=styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px;
`
const Textarea=styled.textarea`
  font-family: "Suisse Intl", sans-serif;
  border-right: 16px;
  font-style: normal;
  font-weight: 450;
  line-height: 24px;
  letter-spacing: 0;
  box-sizing: border-box;
  width: 100%;
  min-height: 120px;
  background-color: #F4F4F6;
  border-radius: 20px 20px 0 0;
  border-top:none;
  border-left: none; 
  border-right: none;
  border-bottom: 1px solid #E0E0E0;
  padding: 24px 24px 0 24px;

  &:focus-visible {
    outline: none;
    border: 1px solid  #555454FF;
  }
`
const Button = styled.button`
  padding: 8px 16px;
  border-radius: 20px;
  text-decoration: none;
  font-family: "Suisse Intl", sans-serif;
  font-style: normal;
  font-weight: 450;
  font-size: 16px;
  line-height: 24px;
  color: #0A0A0B;
  background-color: #FFFF00;
  border: none;
  :hover {
    cursor: pointer;
  }
`

const CommentInput = () => {

  const {currentUser} = useSelector( state => state.common);
  const {slug} = useSelector(state => state.article.article)
  const [body, setBody] = useState('')
  const dispatch = useDispatch();


  const createComment = (ev)  => {
    ev.preventDefault();
    const payload = agent.Comments.create(slug,
        {body: body});
    setBody( '');
    dispatch({ type: ADD_COMMENT, payload });
  }

    return (
      <Form onSubmit={createComment}>
          <Textarea
            placeholder="Write a comment..."
            value={body}
            onChange={(ev) => setBody(ev.target.value)}
            rows="3">
          </Textarea>
        <CardFooter>
          <ArticleMeta author={currentUser} createdAt={new Date().toDateString()} theme='light'/>
          <Button
            type="submit">
            Post Comment
          </Button>
        </CardFooter>
      </Form>
    );
}

export default CommentInput;
