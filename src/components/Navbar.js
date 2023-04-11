import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = ({ setUser, setToken, setIsLoggedIn }) => {
  const navigate = useNavigate();
  return (
    <nav>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/login'>Login</NavLink>
      <NavLink to='/posts'>Posts</NavLink>
      <button
        onClick={() => {
          setIsLoggedIn(false);
          setUser({});
          setToken('');
          localStorage.removeItem('token');
          navigate('/');
        }}
      >
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
