import React from 'react';
import CommentsContainer from './CommentsContainer';
import PostContent from './PostContent';
import { useQuery } from 'react-query';
import { fetchPost } from '../../utils/getTopPosts';

export default (props) => {
  const { id } = props.match.params;
  const shouldFetch = !(props.location.state && props.location.state.post);

  let { data: post, isLoading } = useQuery(['post', id], fetchPost, {
    enabled: shouldFetch,
    staleTime: 1000 * 60 * 3 /* 3 minutes */,
  });

  if (!shouldFetch && !post) post = props.location.state.post;

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
      {shouldFetch && isLoading && <h1>Loading...</h1>}
      {post && <PostContent post={post} fetched={shouldFetch} />}
      {post && <CommentsContainer postId={post.id} fetched={shouldFetch} />}
    </div>
  );
};
