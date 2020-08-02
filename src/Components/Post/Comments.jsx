import React, { Fragment } from 'react';
import Comment from './Comment';

export default ({ comments }) => {
  return (
    <div className="comments">
      {/* <div className="sort-comment-dropdown">Sort By</div> */}
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};
