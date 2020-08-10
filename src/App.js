import React, { useState, useCallback } from 'react';
import FullPost from './Components/Post/FullPost';
// import './App.css';
import { useTopPosts } from './utils/getTopPosts';
import PostList from './Components/PostsList/PostList';

function App({ topPostsFromServer }) {
  let [posts, loading, fetchPosts] = useTopPosts(30);
  const [displayedPost, setDisplayedPost] = useState(null);

  const clearDisplayedPost = useCallback(() => {
    setDisplayedPost(null);
  }, [setDisplayedPost]);

  return (
    <div className="App">
      {!displayedPost && (
        <PostList
          posts={topPostsFromServer || posts}
          fetchPosts={fetchPosts}
          setDisplayedPost={setDisplayedPost}
        />
      )}
      {displayedPost && (
        <FullPost
          post={displayedPost}
          clearDisplayedPost={clearDisplayedPost}
        />
      )}
    </div>
  );
}

export default App;
