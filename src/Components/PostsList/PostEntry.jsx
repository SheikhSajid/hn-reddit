import React, { memo, useCallback } from 'react';
import PostContent from '../Post/PostContent';

export default memo(({ post, handleClick }) => {
  const openHNPageInNewTab = useCallback((event) => {
    event.stopPropagation();
    handleClick(post);
  }, []);

  return (
    <div onClick={openHNPageInNewTab} className="post postlist-entry">
      <PostContent post={post} />
    </div>
  );
});
