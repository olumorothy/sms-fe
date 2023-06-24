export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user_token"));
};

export const logoutUser = () => {
  localStorage.removeItem("user_token");
};

export const authHeader = () => {
  const user = JSON.parse(localStorage.getItem("user_token"));

  if (user) {
    //change to authorization
    return { "x-access-token": user.token };
  } else {
    return {};
  }
};
