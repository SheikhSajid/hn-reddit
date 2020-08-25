import React from 'react';
import CommentsContainer from './CommentsContainer';
import PostContent from './PostContent';

export default (props) => {
  const post = props.location.state.post;
  return (
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
  );
};
