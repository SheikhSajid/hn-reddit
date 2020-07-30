import { useState, useEffect, useRef } from 'react';
// import dummyPosts from '../dummyTopPosts';

let postsFetchedSoFar = 0;

export function useTopPosts(noOfPostsToFetch) {
  const [topPosts, setTopPosts] = useState([]);

  const postIds = useRef([])

  // Fetch the IDs of the Top Stories
  useEffect(() => {
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
      .then(res => res.json())
      .then(res => {
        postIds.current = res;

        // Fetch the stories
        fetchPostContent(noOfPostsToFetch);
      });
      
    // postIds.current = dummyPosts;
    // setTopPosts(dummyPosts);
  }, []);
  
  function fetchPostContent(noOfPostsToFetch, startIndex) {
    startIndex = (startIndex === undefined) ? postsFetchedSoFar : 0;
    const reqs = [];
    
    for (let i = startIndex; i < startIndex + noOfPostsToFetch; i++) {
      const id = postIds.current[i];
      
      const req = fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
      reqs.push(req);
    }

    Promise.all(reqs)
      .then(responses => {
        const jsonPromises = responses.map(res => res.json());

        Promise.all(jsonPromises)
          .then(posts => {
            setTopPosts([...topPosts, ...posts]);
            postsFetchedSoFar += noOfPostsToFetch;
          });
      });
  }

  return [topPosts, fetchPostContent];
}
