import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './Components/PostsList/Post';
import { useTopPosts } from './utils/getTopPosts';

function App() {
  const [loading, setLoading] = useState(false);
  const [posts, fetchPosts] = useTopPosts(5);

  return (
    <div className="App">
      {loading && <img src={logo} className="App-logo" alt="logo" />}
      {!loading && posts.map(post => <Post key={post.id} post={post} />)}
    </div>
  );
}

export default App;
