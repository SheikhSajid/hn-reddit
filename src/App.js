import React from 'react';
import './App.css';
import { useTopPosts } from './utils/getTopPosts';
import PostList from './Components/PostsList/PostList';
import { Switch, Route } from 'react-router-dom';
import FullPost from './Components/Post/FullPost';

function App() {
  const [posts, loading, fetchPosts] = useTopPosts(30);

  return (
    <div className="App">
      <Switch>
        <Route path="/hn-reddit/post/:id" component={FullPost} />

        <Route path="/">
          <PostList posts={posts} fetchPosts={fetchPosts} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
