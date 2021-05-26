import React from 'react';
import agent from '../../agent';
import { useDispatch } from 'react-redux';
import { DELETE_COMMENT } from '../../utils/constants/actionTypes';
import {TrashIcon} from "../Icons";
import styled from "styled-components"

const ButtonWrap=styled.span`
cursor: pointer;
`

const DeleteButton = props => {
  const dispatch = useDispatch();

  const del = () => {
    const payload = agent.Comments.delete(props.slug, props.commentId);
    const commentId = props.commentId;
    dispatch({ type: DELETE_COMMENT, payload, commentId })
  };

  if (props.show) {
    return (
      <ButtonWrap onClick={del}>
        <TrashIcon  color={'#F53D5C'} />
       </ButtonWrap>
    );
  }
  return null;
};

export default DeleteButton;
