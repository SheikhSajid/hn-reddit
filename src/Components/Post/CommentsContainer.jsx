import React, { Fragment } from 'react';
import Comments from './Comments';
import { usePostComments } from '../../utils/getComments';

export default ({ postId }) => {
  const [comments, loading] = usePostComments(postId);

  return (
    <Fragment>
      {!loading && <div className="sort-comment-dropdown">Sort By</div>}
      {!loading && (
        <Comments style={{ marginLeft: '-20px' }} comments={comments} />
      )}
      {loading && <h1>Loading Comments...</h1>}
    </Fragment>
  );
};
