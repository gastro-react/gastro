import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { applyTagFilter } from '../../services/actions/applyTagFilter'
import { StyledTag } from '../../ui'

const TagList = styled.div`
  padding-top: 8px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 4px;
`

const Tag = ({ tag }) => {
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

const Tags = () => {
  const { tags } = useSelector((state) => state.home)

  return tags ? (
    <TagList>
      {tags.map((tag, index) => (
        <Tag key={index} tag={tag} />
      ))}
    </TagList>
  ) : (
    <span>Loading Tags...</span>
  )
}

export default Tags
