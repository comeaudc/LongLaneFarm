import axios from 'axios';

export const signUp = async (formData) => {
  let res = await axios({
    method: 'POST',
    url: '/api/users/register',
    data: formData,
  });
  return res;
};

export const login = async (formData) => {
  let res = await axios({
    method: 'PUT',
    url: '/api/users/login',
    data: formData,
  });
  return res;
};

export const logout = async () => {
  let res = await axios({
    method: 'POST',
    url: '/api/users/logout',
  });
  console.log(res);
  return res;
};

export const getUserFromSession = async () => {
  let res = await axios('/api/users/session-info');

  if (res.data.session.passport) {
    let user = res.data.session.passport.user;
    return user;
  } else {
    return false;
  }
};
