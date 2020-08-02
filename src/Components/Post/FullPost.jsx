import React from 'react';
import Comments from './Comments';
import PostContent from './PostContent';
import { usePostComments } from '../../utils/getComments';

export default ({ post, clearDisplayedPost }) => {
  const [comments, loading] = usePostComments(post.id);

  return (
    <div
      style={{
        width: '100%',
        height: 'calc(100% - 200px)',
        backgroundColor: '#F6F6EF',
        position: 'absolute',
        top: 0,
        left: 0,
      }}
      className="post post-display"
    >
      <PostContent post={post} />
      {/* Comments */}
      {!loading && <Comments comments={comments} />}
      {loading && <h3>Laoding comments...</h3>}
    </div>
  );
};
