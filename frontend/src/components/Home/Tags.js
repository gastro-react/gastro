import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import agent from '../../agent';

const TagList = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 4px;
`;
const StyledTag = styled.a`
  text-decoration: none;
  background: #f4f4f4;
  border: 1px solid #e0e0e0;
  border-radius: 100px;
  padding: 0 4px;
  color: #000;
  transition: background-color .3s linear;

  &:hover {
    background: #ff0;
    text-decoration: none;
  }
  &:active &:clicked {
    background: #ff0;
  }
`;

const Tag = ({ tag }) => {
  const dispatch = useDispatch();
  const handleClick = e => {
    e.preventDefault();
    const pager = page => agent.Articles.byTag(tag, page);
    const payload = () => agent.Articles.byTag(tag);
    dispatch({ type: APPLY_TAG_FILTER, tag, pager, payload })
  };

  return (
    <StyledTag
      href=""
      onClick={handleClick}>
      {tag}
    </StyledTag>
  )
}

const Tags = () => {
  const { tags } = useSelector(state => state.home);
  return tags
    ? (
      <TagList>
        {
          tags.map((tag, index) => <Tag tag={tag} key={index} tag={tag}/>)
        }
      </TagList>
    )
    : (
      <span>Loading Tags...</span>
    )
};

export default Tags;
