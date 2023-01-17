import { defineStore } from 'pinia';
import { loginUser } from '../api/authApi';

export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      token: null,
    };
  },

  getters: {},

  actions: {
    async getToken(payload) {
      const response = await loginUser(payload);

      if (response.status === 200) {
        this.token = response.data.token;
      }
    },
  },

  persist: true,
});
