import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import agent from '../../agent';

const StyledTag = styled.a`
  text-decoration: none;
  background-color: red;
`;
const TagList = styled.div`
  display: flex;
`;


const Tags = () => {
  const { tags } = useSelector(state => state.home);

  const Tag = (tag) => {
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
  /*       className="tag-default tag-pill" */
        key={tag}
        onClick={handleClick}>
        {tag}
      </StyledTag>
    )
  }


  return tags
    ? (
      <TagList>
        {
          tags.map(tag => <Tag tag={tag}/>)
        }
      </TagList>
    )
    : (
      <span>Loading Tags...</span>
    )
};

export default Tags;
