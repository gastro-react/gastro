import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ArticleMeta from './ArticleMeta'
import styled from 'styled-components'
import { createComment } from '../../services/actions/createComment'
import { SuisseNormalMediumText } from '../../ui'

const Form = styled.form`
  margin-bottom: 32px;
  padding: 0;
  border: 1px solid #e0e0e0;
  border-radius: 20px;
`
const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px;
`
const Textarea = styled(SuisseNormalMediumText)`
  border-right: 16px;
  box-sizing: border-box;
  width: 100%;
  min-height: 120px;
  background-color: #f4f4f6;
  border-radius: 20px 20px 0 0;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #e0e0e0;
  padding: 24px 24px 0 24px;

  &:focus-visible {
    outline: none;
    border: 1px solid #555454ff;
  }
`
const Button = styled(SuisseNormalMediumText)`
  padding: 8px 16px;
  border-radius: 20px;
  text-decoration: none;
  color: #0a0a0b;
  background-color: #ffff00;
  border: none;
  :hover {
    cursor: pointer;
  }
`

const CommentInput = () => {
  const { currentUser } = useSelector((state) => state.common)
  const { slug } = useSelector((state) => state.article.article)
  const [body, setBody] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (ev) => {
    ev.preventDefault()
    dispatch(createComment(slug, body))
    setBody('')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Textarea
        as="textarea"
        placeholder="Write a comment..."
        value={body}
        onChange={(ev) => setBody(ev.target.value)}
        rows="3"
      ></Textarea>
      <CardFooter>
        <ArticleMeta
          author={currentUser}
          createdAt={new Date().toDateString()}
          theme="light"
        />
        <Button as="button" type="submit">
          Post Comment
        </Button>
      </CardFooter>
    </Form>
  )
}

export default CommentInput
