import { useState, useEffect } from 'react';

export function usePostComments(id) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getComments(id) {
    try {
      const response = await fetch(`http://hn.algolia.com/api/v1/items/${id}`);
      const post = await response.json();
      setComments(post.children);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getComments(id);
  }, []);

  return [comments, loading];
}
