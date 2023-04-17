import React from 'react';
import {
  createNewPost,
  updateEntirePost,
  updatePartialPost,
  deletePost,
} from '../api';
import Button from './Button';

const Posts = ({ posts, setPosts, isLoggedIn, user }) => {
  const postId = 1;
  const postId2 = 2;
  const postId3 = 3;

  const postToCreate = {
    title: 'Our New Post',
    body: 'This post is mostly about the bestestest kitten, my Grim!',
    userId: 1,
  };

  const postToCompletelyUpdate = {
    id: `${postId}`,
    title: 'Our updated post with id: 1',
    body: 'I also have a slither puppy name Nagini!',
    userId: 1,
  };

  const filedsToUpdate = {
    title: "Adonis is my pitty-mix, and he's now in the spotlight. id: 2",
  };

  // console.log(posts);
  return (
    <>
      {isLoggedIn ? (
        <>
          <h1>Hello, {user.username}! From Posts.js</h1>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
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
          <Button
            nameOfClass={'create-button'}
            action={async () => {
              const newPost = await createNewPost(postToCreate);
              setPosts([newPost, ...posts]);
            }}
            content={'Create New Post'}
          />

          {/* <button
            onClick={async () => {
              const newPost = await createNewPost(postToCreate);
              setPosts([newPost, ...posts]);
            }}
          >
            Create New Post
          </button> */}
          <button
            onClick={async () => {
              const updatedPost = await updateEntirePost(
                postId,
                postToCompletelyUpdate
              );
              const listToReturn = posts.filter(
                (post) => post.id !== updatedPost.id
              );
              setPosts([updatedPost, ...listToReturn]);
            }}
          >
            Update PUT Post
          </button>
          <button
            onClick={async () => {
              const updatedPost = await updatePartialPost(
                postId2,
                filedsToUpdate
              );
              const listToReturn = posts.filter(
                (post) => post.id !== updatedPost.id
              );
              setPosts([updatedPost, ...listToReturn]);
            }}
          >
            Update PATCH Post
          </button>
          <button
            onClick={async () => {
              // const postDeleted = await deletePost(postId3);
              await deletePost(postId3);
              setPosts([...posts.filter((post) => post.id !== postId3)]);
            }}
          >
            Delete Post
          </button>
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
