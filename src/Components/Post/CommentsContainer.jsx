import React, { Fragment } from 'react';
import Comment from './Comment';
import { usePostComments } from '../../utils/getComments';

export default ({ postId }) => {
  const [comments, loading] = usePostComments(postId);

  return (
    <Fragment>
      {!loading && <div className="sort-comment-dropdown">Sort By</div>}
      {!loading && (
        <div className="comments">
          {/* <div className="sort-comment-dropdown">Sort By</div> */}
          {comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </div>
      )}
      {loading && <h1>Loading Comments...</h1>}
    </Fragment>
  );
};
