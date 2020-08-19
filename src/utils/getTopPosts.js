import { useState, useEffect, useRef } from 'react';
// import dummyPosts from '../dummyTopPosts';
// import dummyPostIds from '../dummyTopPostIds';

let postsFetchedSoFar = 0;

export function useTopPosts(noOfPostsToFetch) {
  const [topPosts, setTopPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const postIds = useRef([]);

  // Fetch the IDs of the Top Stories
  useEffect(() => {
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
      .then((res) => res.json())
      .then((res) => {
        postIds.current = res;

        // Fetch the stories
        fetchPostContent(noOfPostsToFetch);
      });

    // postIds.current = dummyPostIds;
    // setTopPosts(dummyPosts);
    // postsFetchedSoFar += dummyPosts.length;
    // setLoading(false);
  }, []);

  async function fetchPostContent(noOfPostsToFetch, startIndex) {
    setLoading(true);
    startIndex = startIndex === undefined ? postsFetchedSoFar : startIndex;
    const reqs = [];

    for (let i = startIndex; i < startIndex + noOfPostsToFetch; i++) {
      const id = postIds.current[i];

      const req = fetch(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json`
      );
      reqs.push(req);
    }

    const responses = await Promise.all(reqs);
    const jsonPromises = responses.map((res) => res.json());
    const posts = await Promise.all(jsonPromises);
    setLoading(false);

    setTopPosts([...topPosts, ...posts]);
    postsFetchedSoFar += noOfPostsToFetch;

    return posts;
  }

  return [topPosts, loading, fetchPostContent];
}
