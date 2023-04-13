const BASE = 'http://localhost:8000/api/2303-ftb-et-web-ft';

export const getMe = async (token) => {
  try {
    const response = await fetch(`${BASE}/users/me`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    const { success, error, data } = await response.json();
    console.log({ success, error, data });

    return { success, error, user: data };
  } catch (error) {
    console.error(error);
  }
};

export const authenticateUser = async (userObject, pathName) => {
  console.log('in auth api');
  try {
    const response = await fetch(`${BASE}/users/${pathName}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userObject),
    });

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
/*
export const loginUser = async (userObject) => {
  try {
    const response = await fetch(`${BASE}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userObject),
    });

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
export const registerUser = async (userObject) => {
  try {
    const response = await fetch(`${BASE}/users/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userObject),
    });

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
*/
