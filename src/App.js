import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useTopPosts } from './utils/getTopPosts';
import PostList from './Components/PostsList/PostList';

function App() {
  const [posts, loading, fetchPosts] = useTopPosts(30);

  return (
    <div className="App">
      <PostList posts={posts} fetchPosts={fetchPosts} />
    </div>
  );
}

export default App;
