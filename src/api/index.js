const BASE = 'https://jsonplace-univclone.herokuapp.com';

const fakePosts = {
  success: true,
  error: null,
  data: {
    posts: [
      {
        location: '[On Request]',
        willDeliver: false,
        messages: [],
        active: true,
        _id: '642762a8cd3bfb001620064e',
        author: {
          _id: '642762a8cd3bfb0016200648',
          username: 'joe1234',
        },
        cohort: '642762a8cd3bfb0016200646',
        title: 'Practically new Stradivarius',
        description:
          "I've really only used this three or four times.  I thought it would be a good purchase, shows what I know.",
        price: '$14.3 million',
        createdAt: '2023-03-31T22:46:00.837Z',
        updatedAt: '2023-03-31T22:46:00.880Z',
        __v: 0,
        isAuthor: false,
      },
      {
        location: '[On Request]',
        willDeliver: true,
        messages: [],
        active: true,
        _id: '642762a8cd3bfb001620064f',
        author: {
          _id: '642762a8cd3bfb0016200649',
          username: 'jane1234',
        },
        cohort: '642762a8cd3bfb0016200646',
        title: 'Golden Retriever puppies',
        description:
          'Not looking for any money, just want to find a good home for these four beautiful pups.',
        price: 'free',
        createdAt: '2023-03-31T22:46:00.837Z',
        updatedAt: '2023-03-31T22:46:00.886Z',
        __v: 0,
        isAuthor: false,
      },
      {
        location: 'Ames, IA',
        willDeliver: true,
        messages: [],
        active: true,
        _id: '642762a8cd3bfb0016200650',
        author: {
          _id: '642762a8cd3bfb001620064a',
          username: 'caesar1234',
        },
        cohort: '642762a8cd3bfb0016200646',
        title: 'NordicTrack Freestrider Elliptical Trainer',
        description: 'To be honest, it is more amazing than my resolve.',
        price: '$1400, OBO',
        createdAt: '2023-03-31T22:46:00.837Z',
        updatedAt: '2023-03-31T22:46:00.891Z',
        __v: 0,
        isAuthor: false,
      },
    ],
  },
};
export const getPosts = async () => {
  try {
    // const response = await fetch(`${BASE}/posts`);

    // const data = await response.json();

    // console.log(data);
    // return data;
    const {
      data: { posts },
    } = fakePosts;
    // return fakePosts.data.posts;
    return posts;
  } catch (error) {
    console.error(error);
  }
};

export const createNewPost = async (newPost, token) => {
  try {
    const response = await fetch(`${BASE}/posts`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        // 'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(newPost),
    });

    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const updateEntirePost = async (postId, post, token) => {
  try {
    const response = await fetch(`${BASE}/posts/${postId}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        // 'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(post),
    });

    const result = await response.json();

    return result;
  } catch (error) {
    console.error(error);
  }
};

export const updatePartialPost = async (postId, updatedFields, token) => {
  try {
    const response = await fetch(`${BASE}/posts/${postId}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        // 'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(updatedFields),
    });

    const result = await response.json();

    return result;
  } catch (error) {
    console.error(error);
  }
};

export const deletePost = async (postId, token) => {
  try {
    /* you should check to see if the author of the post is you before
    deleting the post. If not put a guard clause in to prevent that
    from occurring. It may also be nice to have a helpful message
    stating you can't delete that.
    */
    const response = await fetch(`${BASE}/posts/${postId}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        // 'Authorization': `Bearer ${token}`
      },
    });

    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
};
