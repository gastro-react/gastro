import React from 'react';
import { useDispatch } from 'react-redux';
import {TrashIcon} from "../Icons";
import styled from "styled-components"
import {deleteComment} from "../../services/actions/deleteComment";

const ButtonWrap=styled.span`
cursor: pointer;
`

const DeleteButton = props => {
  const dispatch = useDispatch();

  if (props.show) {
    return (
      <ButtonWrap onClick={()=> dispatch(deleteComment(props.slug, props.commentId))}>
        <TrashIcon  color={'#F53D5C'} />
       </ButtonWrap>
    );
  }
  return null;
};

export default DeleteButton;
