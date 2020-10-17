import React, { memo, useCallback } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useHistory } from 'react-router-dom';

import PostEntry from './PostEntry';

export default memo(({ posts, fetchPosts }) => {
  // TODO: Replace 'react-infinite-scroll-component' package (uses the deprecated
  //       componentWillReceiveProps) with 'react-infinite-scroller'
  let history = useHistory();

  const handleClick = useCallback(
    (post) => {
      history.push({ pathname: `/hn-reddit/post/${post.id}`, state: { post } });
    },
    [history]
  );

  return (
    <InfiniteScroll
      dataLength={posts.length}
      next={fetchPosts}
      hasMore={posts.length <= 500}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      {posts.map((post) => (
        <PostEntry key={post.id} post={post} handleClick={handleClick} />
      ))}
    </InfiniteScroll>
  );
});
