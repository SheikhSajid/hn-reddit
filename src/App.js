import React, { useState } from 'react';
import FullPost from './Components/Post/FullPost';
import './App.css';
import { useTopPosts } from './utils/getTopPosts';
import PostList from './Components/PostsList/PostList';

function App() {
  const [posts, loading, fetchPosts] = useTopPosts(30);
  const [displayedPost, setDisplayedPost] = useState(null);

  return (
    <div className="App">
      <PostList
        posts={posts}
        fetchPosts={fetchPosts}
        setDisplayedPost={setDisplayedPost}
      />
      {displayedPost && (
        <FullPost
          post={displayedPost}
          clearDisplayedPost={() => setDisplayedPost(null)}
        />
      )}
    </div>
  );
}

export default App;
