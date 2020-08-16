import React from 'react';
import Comment from './Comment';

export default ({ comments, style }) => {
  return (
    <div style={style} className="comments">
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};
