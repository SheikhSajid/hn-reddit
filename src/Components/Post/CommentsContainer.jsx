import React, { Fragment } from 'react';
import Comments from './Comments';
import { usePostComments } from '../../utils/getComments';
import SortDropdown from './SortDropdown';

export default ({ postId }) => {
  const [comments, loading, sortComments] = usePostComments(postId);

  return (
    <Fragment>
      {!loading && <SortDropdown sortComments={sortComments} />}
      {!loading && (
        <Comments style={{ marginLeft: '-20px' }} comments={comments} />
      )}
      {loading && <h1>Loading Comments...</h1>}
    </Fragment>
  );
};
