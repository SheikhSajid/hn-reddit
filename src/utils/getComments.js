import { useState, useEffect, useRef } from 'react';

export function usePostComments(id) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  const commentsRef = useRef({ default: comments });

  async function getComments(id) {
    try {
      const response = await fetch(`http://hn.algolia.com/api/v1/items/${id}`);
      const post = await response.json();
      setComments(post.children);
      commentsRef.current = post.children;
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  }

  const sortComments = (option) => {
    if (option === 'Default') setComments(commentsRef.current);
    else setComments(sortCommentsImpl(option, comments));
  };

  useEffect(() => {
    getComments(id);
  }, []);

  return [comments, loading, sortComments];
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
