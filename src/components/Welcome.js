import React from 'react';
import Posts from './Posts';

const Welcome = (props) => {
  console.log(props);
  const { isLoggedIn, user, posts, setPosts } = props;
  return (
    <>
      {isLoggedIn ? (
        <>
          <h1>Hello, {user.username}! Welcome back!</h1>
          <Posts
            posts={posts}
            setPosts={setPosts}
            isLoggedIn={isLoggedIn}
            user={user}
          />
        </>
      ) : (
        <>
          <h1>Hello to you! Please login to get started.</h1>
          <Posts
            posts={posts}
            setPosts={setPosts}
            isLoggedIn={isLoggedIn}
            user={user}
          />
        </>
      )}
    </>
  );
};

export default Welcome;
