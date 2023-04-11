import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../api/auth';

const grim = {
  posts: [],
  messages: [],
  _id: '643593cc3fc91b00165887bc',
  username: 'Grim',
  cohort: '642762a8cd3bfb0016200646',
  __v: 0,
};

const fakeResponse = {
  success: true,
  error: null,
  data: {
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDM1OTNjYzNmYzkxYjAwMTY1ODg3YmMiLCJ1c2VybmFtZSI6IkdyaW0iLCJpYXQiOjE2ODEyMzI4NDR9.Y7wkSa9dGh3JohOLEegM3rp52pyLy1F1-ktvsFDQhNA',
    message: 'Thanks for signing up for our service.',
  },
};

const Login = ({
  isLoggedIn,
  setIsLoggedIn,
  token,
  setToken,
  user,
  setUser,
}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  console.log(username);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // make an api call
    const userToAuth = { user: { username: username, password: password } };

    const data = await loginUser(userToAuth);

    if (data.token) {
      setToken(data.token);
      setUser({ username, token: data.token });
      setIsLoggedIn(true);
    }
    setUsername('');
    setPassword('');
    navigate('/posts');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='JohnSmith'
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          type='text'
          placeholder='Password123!!!'
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type='submit'>Login</button>
      </form>
    </>
  );
};

export default Login;
