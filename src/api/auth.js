export const getMe = async (token) => {
  try {
    const response = await fetch(
      'https://strangers-things.herokuapp.com/api/2303-ftb-et-web-ft/users/me',
      {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const { success, error, data } = await response.json();
    console.log({ success, error, data });

    return { success, error, user: data };
  } catch (error) {
    console.error(error);
  }
};

export const loginUser = async (userObject) => {
  try {
    const response = await fetch(
      `https://strangers-things.herokuapp.com/api/2303-ftb-et-web-ft/users/login`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userObject),
      }
    );

    const { success, error, data } = await response.json();

    if (success) {
      const { token, message } = data;
      const { success, error, user } = await getMe(token);
      if (user) {
        localStorage.setItem('token', token);
        return { token, message, user };
      }
      return { token, message, error };
    }
    if (!success && !error) {
      const { name, message } = data;
      return { name, message };
    }
    console.log(success, error, data);
  } catch (error) {
    console.error(error);
  }
};
