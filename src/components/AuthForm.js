import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { authenticateUser } from '../api/auth';

const AuthForm = ({
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
  const { formName } = useParams();
  console.log(formName);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // make an api call
    const userToAuth = { user: { username: username, password: password } };

    const data = await authenticateUser(userToAuth, formName);

    if (data.token) {
      setToken(data.token);
      setUser(data.user);
      setIsLoggedIn(true);
    }
    setUsername('');
    setPassword('');
    navigate('/posts');
  };

  return (
    <>
      <form name={formName} onSubmit={handleSubmit}>
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
        <button type='submit'>
          {formName[0].toUpperCase() + formName.slice(1)}
        </button>
      </form>
    </>
  );
};

export default AuthForm;
