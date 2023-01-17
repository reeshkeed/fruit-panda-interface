<script>
import { mapActions } from 'pinia';
import { useAuthStore } from '../../stores/auth.store';

export default {
  methods: {
    ...mapActions(useAuthStore, ['logoutUser']),
    logout() {
      this.logoutUser();

      this.$router.push('/login');
    },
  },
};
</script>

<template>
  <header
    class="navbar bg-dark-500 flex justify-between items-center p-3 w-auto"
  >
    <img alt="Girish Daloso" class="h-14 w-14" src="@/assets/logo.svg" />

    <div class="text-gray-400">
      <RouterLink class="pr-2" to="/">Home</RouterLink>
      <RouterLink class="pr-2" to="/about">About</RouterLink>
      <button @click="logout">Logout</button>
    </div>
  </header>
</template>

<style></style>
