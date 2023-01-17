import api from './api';

const URLS = {
  loginUrl: 'login',
};

export const loginUser = async (payload) => {
  return await api.post(URLS.loginUrl, payload);
};
