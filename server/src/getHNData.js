import fetch from 'node-fetch';

function getTopPostIds() {
  return fetch(
    'https://hacker-news.firebaseio.com/v0/topstories.json'
  ).then((res) => res.json());
}

export function getTopPosts() {
  const jsonReqsPromise = getTopPostIds().then((ids) => {
    const first30 = ids.slice(0, 30);
    const reqs = first30.map((id) =>
      fetch(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json`
      ).then((res) => res.json())
    );

    return reqs;
  });

  return jsonReqsPromise.then((jsonPromises) => Promise.all(jsonPromises));
}
