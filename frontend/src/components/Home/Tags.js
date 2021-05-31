import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Tag from '../Tag'

const TagList = styled.div`
  padding-top: 8px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 4px;
`

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
