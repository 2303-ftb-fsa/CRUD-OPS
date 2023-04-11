import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar, Login, Posts, Welcome } from '.';
import { getPosts } from '../api';
import './index.css';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState({});
  const [token, setToken] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const getInitialData = async () => {
      const fetchedPosts = await getPosts();
      setPosts(fetchedPosts);
    };
    getInitialData();
  }, []);

  return (
    <>
      <Navbar
        setIsLoggedIn={setIsLoggedIn}
        setUser={setUser}
        setToken={setToken}
      />
      <Routes>
        <Route
          path='/'
          element={
            <Welcome
              user={user}
              isLoggedIn={isLoggedIn}
              posts={posts}
              setPosts={setPosts}
            />
          }
        />
        <Route
          path='/login'
          element={
            <Login
              token={token}
              setToken={setToken}
              user={user}
              setUser={setUser}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
            />
          }
        />
        <Route
          path='/posts'
          element={
            <Posts
              posts={posts}
              setPosts={setPosts}
              isLoggedIn={isLoggedIn}
              user={user}
            />
          }
        />
      </Routes>
    </>
  );
};

export default App;
