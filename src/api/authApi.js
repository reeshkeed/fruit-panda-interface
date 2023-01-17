import api from './api';

const URLS = {
  loginUrl: 'login',
};

export const loginUser = (payload) => {
  return api.post(URLS.loginUrl, payload);
};
