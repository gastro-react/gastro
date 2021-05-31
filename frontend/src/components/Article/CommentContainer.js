import CommentInput from './CommentInput'
import CommentList from './CommentList'
import { Link } from 'react-router-dom'
import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { SpectralBoldMediumText } from '../../ui'

const CommentsTitle = styled(SpectralBoldMediumText)`
  margin: 32px 0;
`

const CommentContainer = (props) => {
  const { currentUser } = useSelector((state) => state.common)

  if (currentUser) {
    return (
      <>
        <CommentsTitle as="h3">Comments</CommentsTitle>
        <div>
          {/*<list-errors errors={props.errors}></list-errors>*/}
          <CommentInput />
        </div>
        <CommentList
          comments={props.comments}
          slug={props.slug}
          currentUser={props.currentUser}
        />
      </>
    )
  } else {
    return (
      <>
        <CommentsTitle as="h3">Comments</CommentsTitle>
        <p>
          <Link to="/login">Sign in</Link>
          &nbsp;or&nbsp;
          <Link to="/register">sign up</Link>
          &nbsp;to add comments on this article.
        </p>

        <CommentList
          comments={props.comments}
          slug={props.slug}
          currentUser={props.currentUser}
        />
      </>
    )
  }
}

export default CommentContainer
