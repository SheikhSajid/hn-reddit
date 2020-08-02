import React from 'react';
import distanceInWordsToNow from 'date-fns/formatDistanceToNow';
import Comments from './Comments';

export default ({ comment }) => {
  const { created_at, author, text, children } = comment;
  const timestamp = distanceInWordsToNow(new Date(created_at), {
    addSuffix: true,
  });

  return (
    <div className="comment-container comment-container-outer">
      <div className="threadline-container threadline-container-outer">
        <div className="threadline"></div>
      </div>

      <div className="comment-content">
        <div className="post-metadata">
          {author} · {timestamp}
        </div>

        <div
          className="comment-body"
          dangerouslySetInnerHTML={{ __html: text }}
        ></div>

        {children.length && <Comments comments={children} />}
      </div>
    </div>
  );
};
