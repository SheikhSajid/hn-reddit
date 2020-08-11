import React, { memo, useCallback } from 'react';
import PostContent from '../Post/PostContent';

export default memo(({ post, setDisplayedPost }) => {
  const openHNPageInNewTab = useCallback((event) => {
    event.stopPropagation();

    if (typeof setDisplayedPost === 'function') setDisplayedPost(post);
    else {
      console.log('type of setDisplayedPost: ' + typeof setDisplayedPost);
    }
  }, []);

  return (
    <div onClick={openHNPageInNewTab} className="post postlist-entry">
      <PostContent post={post} />
    </div>
  );
});
