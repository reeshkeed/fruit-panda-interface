import axios from 'axios';

const axiosParams = {
  // Set base URL defined in .env file
  baseURL: import.meta.env.VITE_API_URL,
};

const axiosInstance = axios.create(axiosParams);

const api = (axios) => {
  // Wrapper functions around axios
  return {
    get: (url, config) => axios.get(url, config),
    post: (url, body, config) => axios.post(url, body, config),
    patch: (url, body, config) => axios.patch(url, body, config),
    delete: (url, config) => axios.delete(url, config),
  };
};

// Initialise the api function and pass axiosInstance to it
export default api(axiosInstance);
