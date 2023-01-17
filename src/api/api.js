import axios from 'axios';

const axiosParams = {
  // Set base URL defined in .env file
  baseURL: import.meta.env.VITE_API_URL,
};

const axiosInstance = axios.create(axiosParams);

const api = (axios) => {
  /**
   * Wrapper functions around axios
   * @success return response data on success
   * @error return error response
   */
  return {
    get: (url, config) =>
      axios
        .get(url, config)
        .then((response) => {
          return response.data;
        })
        .catch((error) => {
          return error.response.data;
        }),

    post: (url, body, config) =>
      axios
        .post(url, body, config)
        .then((response) => {
          return response.data;
        })
        .catch((error) => {
          return error.response.data;
        }),

    patch: (url, body, config) =>
      axios
        .patch(url, body, config)
        .then((response) => {
          return response.data;
        })
        .catch((error) => {
          return error.response.data;
        }),

    delete: (url, config) =>
      axios
        .delete(url, config)
        .then((response) => {
          return response.data;
        })
        .catch((error) => {
          return error.response.data;
        }),
  };
};

// Initialize the api function and pass axiosInstance to it
export default api(axiosInstance);
