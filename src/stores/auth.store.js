import { defineStore } from 'pinia';
import { loginUser } from '../api/authApi';

export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      token: null,
    };
  },

  actions: {
    async getToken(payload) {
      try {
        const response = await loginUser(payload);

        this.token = response.token;
      } catch (error) {
        return error;
      }
    },
  },
});
