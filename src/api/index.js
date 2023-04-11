const BASE = 'https://jsonplace-univclone.herokuapp.com';

export const getPosts = async () => {
  try {
    const response = await fetch(`${BASE}/posts`);

    const data = await response.json();

    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};
