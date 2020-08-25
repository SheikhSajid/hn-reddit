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
  const post = await fetchFullPost(id);
  const comments = post.children;

  // store the default order of comments from the server in a ref
  if (commentsRef) commentsRef.current = comments;

  return comments;
}

export async function fetchFullPost(id) {
  const response = await fetch(`https://hn.algolia.com/api/v1/items/${id}`);
  const post = await response.json();

  return post;
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
