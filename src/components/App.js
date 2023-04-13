import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Navbar, Posts, Welcome, AuthForm } from '.';
import { getPosts } from '../api';
import { getMe } from '../api/auth';
import './index.css';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState({});
  const [token, setToken] = useState(localStorage.token);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const getInitialData = async () => {
      const fetchedPosts = await getPosts();
      setPosts(fetchedPosts);
      if (token) {
        const fetchedUser = await getMe(token);
        setUser(fetchedUser.user);
        setIsLoggedIn(true);
        navigate('/posts');
      }
    };
    getInitialData();
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      const fetchedUser = await getMe(token);
      setUser(fetchedUser.user);
    };
    fetchUser();
  }, [token]);
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
          path='/auth/:formName'
          element={
            <AuthForm
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
        {/* <Route
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
            path='/signup'
            element={
              <Register
                token={token}
                setToken={setToken}
                user={user}
                setUser={setUser}
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
              />
            }
          /> */}
      </Routes>
    </>
  );
};

export default App;
