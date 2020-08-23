// import { useRef } from 'react';
import { useInfiniteQuery, useQuery } from 'react-query';

export function useTopPosts() {
  // Fetch the IDs of the Top Stories
  const { data: topPostIds } = useQuery('topPostIds', fetchTopPostIds, {
    staleTime: 1000 * 60 * 3 /* 3 minutes */,
  });

  const { data: postsArray, isFetchingMore, fetchMore } = useInfiniteQuery(
    'topPosts',
    (...args) => fetchPosts(topPostIds || [], ...args),
    {
      getFetchMore: (lastGroup, allGroups) => {
        const ret = allGroups.length < 500 ? allGroups.length : void 0;
        return ret;
      },
      enabled: topPostIds, // Pause until IDs are loaded
      staleTime: 1000 * 60 * 3 /* 3 minutes */,
    }
  );

  const posts = postsArray ? postsArray.flat() : [];
  return [posts, isFetchingMore, fetchMore];
}

async function fetchPosts(allPostIds, key, pagesFetchedSoFar = 0) {
  const idsToFetch = allPostIds.slice(
    pagesFetchedSoFar * 30,
    pagesFetchedSoFar * 30 + 30
  );
  !pagesFetchedSoFar ?? console.log('first load!');
  console.log('loading! :3');

  const reqs = [];

  idsToFetch.forEach((id) => {
    const req = fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
    reqs.push(req);
  });

  const responses = await Promise.all(reqs);
  const jsonPromises = responses.map((res) => res.json());
  const posts = await Promise.all(jsonPromises);

  return posts;
}

function fetchTopPostIds() {
  console.log('posting ids');
  return fetch(
    'https://hacker-news.firebaseio.com/v0/topstories.json'
  ).then((res) => res.json());
}
