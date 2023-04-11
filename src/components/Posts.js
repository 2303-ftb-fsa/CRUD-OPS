import React from 'react';

const Posts = ({ posts, setPosts, isLoggedIn, user }) => {
  return (
    <>
      {isLoggedIn ? (
        <>
          <h1>Hello, {user.username}! From Posts.js</h1>
          {posts.map((post) => {
            return (
              <article key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                <p>Author id: {post.userId}</p>
              </article>
            );
          })}
        </>
      ) : (
        <>
          <h1>Hello unauthenticated person! From Posts.js</h1>
          {posts.map((post) => {
            return (
              <article key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                <p>Author id: {post.userId}</p>
              </article>
            );
          })}
        </>
      )}
    </>
  );
};

export default Posts;
