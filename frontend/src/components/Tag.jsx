import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { applyTagFilter } from '../services/actions/applyTagFilter'
import { StyledTag } from '../ui'

export default ({ tag }) => {
  const dispatch = useDispatch()
  const chosenTag = useSelector((state) => state.articleList.tag)

  const handleClick = (e) => {
    e.preventDefault()
    dispatch(applyTagFilter(tag))
  }

  return (
    <StyledTag chosen={chosenTag === tag} href="" onClick={handleClick}>
      {tag}
    </StyledTag>
  )
}
