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
      localStorage.setItem('token', token);
      return { token, message };
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
