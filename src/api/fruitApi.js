import api from './api';

const URLS = {
  getAllUrl: 'fruits',
};

export const getAllFruits = async () => {
  return await api.get(URLS.getAllUrl);
};
