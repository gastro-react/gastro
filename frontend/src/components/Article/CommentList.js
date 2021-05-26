import Comment from './Comment';
import React from 'react';
import {useSelector} from "react-redux";

const CommentList = () => {

  const {comments} = useSelector( state => state.article);
  return (
    <div>
      {
        comments.map(comment => {
          return (
            <Comment
              comment={comment}
              // currentUser={props.currentUser}
              // slug={props.slug}
              key={comment.id} />
          );
        })
      }
    </div>
  );
};

export default CommentList;
