import React, { useState, useCallback } from 'react';
import distanceInWordsToNow from 'date-fns/formatDistanceToNow';
import Comments from './Comments';

export default ({ comment }) => {
  const { created_at, author, text, children } = comment;
  const timestamp = distanceInWordsToNow(new Date(created_at), {
    addSuffix: true,
  });

  const [childrenHidden, setChildrenHidden] = useState(false);

  const showHideChildren = useCallback(() => {
    if (childrenHidden) setChildrenHidden(false);
    else setChildrenHidden(true);
  }, [setChildrenHidden]);

  return (
    <div className="comment-container comment-container-outer">
      {!childrenHidden && (
        <div
          onClick={showHideChildren}
          className="threadline-container threadline-container-outer"
        >
          <div className="threadline"></div>
        </div>
      )}

      <div className="comment-content">
        <div onClick={() => setChildrenHidden(false)} className="post-metadata">
          {childrenHidden && '[+]'}
          {author} · {timestamp}
        </div>

        {!childrenHidden && (
          <div
            className="comment-body"
            dangerouslySetInnerHTML={{ __html: text }}
          ></div>
        )}

        {!childrenHidden && !!children.length && (
          <Comments comments={children} />
        )}
      </div>
    </div>
  );
};
