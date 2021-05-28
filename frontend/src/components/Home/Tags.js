import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { applyTagFilter } from '../../services/actions/applyTagFilter'

const TagList = styled.div`
  padding-top: 8px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 4px;
`
const StyledTag = styled.a`
  text-decoration: none;
  background: ${({ chosen }) => (chosen ? '#ff0' : '#f4f4f4')};
  border: 1px solid #e0e0e0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Suisse Intl', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 1;
  border-radius: 100px;
  padding: 8px;
  color: #000;
  transition: background-color 0.3s linear;

  &:hover {
    color: inherit;
    transform: scale(1.1);
    text-decoration: none;
  }
  &:focus {
    text-decoration: none;
  }
  &:active {
    text-decoration: none;
  }
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
