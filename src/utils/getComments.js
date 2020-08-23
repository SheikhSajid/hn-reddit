import { useRef } from 'react';
import { useQuery, queryCache } from 'react-query';

export function usePostComments(id) {
  const commentsRef = useRef([]);

  const { data: comments, isLoading } = useQuery(
    ['postWithComments', id],
    (...args) => getComments(...args, commentsRef),
    {
      staleTime: 1000 * 60 * 3 /* 3 minutes */,
    }
  );

  const sortComments = (option) => {
    let updater;

    if (option === 'Default') {
      updater = () => commentsRef.current;
    } else {
      updater = (oldComments) => sortCommentsImpl(option, oldComments);
    }

    queryCache.setQueryData(['postWithComments', id], updater);
  };

  return [comments, isLoading, sortComments];
}

async function getComments(key, id, commentsRef) {
  const response = await fetch(`http://hn.algolia.com/api/v1/items/${id}`);
  const post = await response.json();

  // store the default order of comments from the server in a ref
  if (commentsRef) commentsRef.current = post.children;

  return post.children;
}

function sortCommentsImpl(option, comments) {
  const commentsCopy = [...comments];

  switch (option) {
    case 'Newest':
      commentsCopy.sort((cmt1, cmt2) => cmt2.created_at_i - cmt1.created_at_i);
      break;
    case 'Oldest':
      commentsCopy.sort((cmt1, cmt2) => cmt1.created_at_i - cmt2.created_at_i);
      break;
    default:
      return comments;
  }

  return commentsCopy;
}
