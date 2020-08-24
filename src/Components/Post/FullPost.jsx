import React, { Fragment } from 'react';
import CommentsContainer from './CommentsContainer';
import PostContent from './PostContent';

export default ({ post, clearDisplayedPost }) => {
  return (
    <Fragment>
      <button
        style={{
          // TODO: Move inline styles to global CSS
          marginBottom: '-2px',
          backgroundColor: 'white',
        }}
        onClick={clearDisplayedPost}
      >
        {'< back'}
      </button>

      <div
        style={{
          // TODO: Move inline styles to global CSS
          // height: '100%',
          // backgroundColor: '#F6F6EF',
          // position: 'absolute',
          top: 0,
          left: 0,
          paddingLeft: '40px',
        }}
        className="post post-display"
      >
        <PostContent post={post} />
        <CommentsContainer postId={post.id} />
      </div>
    </Fragment>
  );
};
