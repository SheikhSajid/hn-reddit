import React, { Fragment } from 'react';
import Comments from './Comments';
import PostContent from './PostContent';
import { usePostComments } from '../../utils/getComments';

export default ({ post, clearDisplayedPost }) => {
  const [comments, loading] = usePostComments(post.id);

  return (
    <Fragment>
      <button
        style={{
          marginBottom: '-2px',
          backgroundColor: 'white',
        }}
        onClick={clearDisplayedPost}
      >
        {'< back'}
      </button>

      <div
        style={{
          width: '100%',
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
        {/* Comments */}
        {!loading && <Comments comments={comments} />}
        {loading && <h3>Loading comments...</h3>}
      </div>
    </Fragment>
  );
};
