import InfiniteScroll from 'react-infinite-scroll-component';
import React, { memo } from 'react';
import PostEntry from './PostEntry';

export default memo(({ posts, fetchPosts }) => {
  // TODO: Replace 'react-infinite-scroll-component' package (uses the deprecated
  //       componentWillReceiveProps) with 'react-infinite-scroller'
  return (
    <InfiniteScroll
      dataLength={posts.length}
      next={() => fetchPosts(10)}
      hasMore={posts.length <= 500}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      {posts.map(post => <PostEntry key={post.id} post={post} />)}
    </InfiniteScroll>
  )
});