<script>
import { mapActions, mapState } from 'pinia';
import { useAuthStore } from '../stores/auth.store';
import BaseButton from '../components/base/BaseButton.vue';
import ToastMessage from '../components/common/ToastMessage.vue';

export default {
  components: { BaseButton, ToastMessage },

  data() {
    return {
      credentials: {
        username: 'gdaloso',
        password: 'qwer123',
      },

      isLoading: false,
      isError: false,
      errorMessage: '',
    };
  },

  computed: {
    ...mapState(useAuthStore, ['token']),
  },

  methods: {
    ...mapActions(useAuthStore, ['getToken']),

    async login() {
      this.isLoading = true;

      const res = await this.getToken(this.credentials);

      // If res return value set error toggler and message
      if (res) {
        this.isError = true;
        this.errorMessage = res;
      }

      // If token success push to home page
      if (this.token) {
        this.$router.push('/');
      }

      this.isLoading = false;
    },
  },
};
</script>

<template>
  <div
    class="login bg-gradient-to-r from-dark-100 to-dark-500 h-screen w-screen grid place-content-center"
  >
    <!-- Toast Message -->
    <ToastMessage v-model:animate="isError" color="red">{{
      errorMessage
    }}</ToastMessage>

    <!-- Login input form -->
    <form
      @submit.prevent="login"
      class="login-card w-80 flex flex-col items-center"
    >
      <img alt="Girish Daloso" class="h-32 w-32" src="@/assets/logo.svg" />
      <h1 class="mb-5 text-white font-thin text-2xl font-sans">Fruit Panda</h1>

      <input
        class="input"
        v-model="credentials.username"
        placeholder="Username"
      />
      <input
        class="input"
        v-model="credentials.password"
        type="password"
        placeholder="Password"
      />

      <BaseButton color="text-white" variant="dark" :loading="isLoading"
        >Login</BaseButton
      >
    </form>
  </div>
</template>

<style>
.login-card .input {
  @apply mb-2 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400
  focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md
  sm:text-sm focus:ring-1;
}
</style>
