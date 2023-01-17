<script>
import NavbarMenu from './components/layout/NavbarMenu.vue';
import { useAuthStore } from './stores/auth.store';
import { mapState } from 'pinia';

export default {
  components: { NavbarMenu },

  computed: {
    ...mapState(useAuthStore, ['token']),
  },
};
</script>

<template>
  <div class="app">
    <NavbarMenu v-if="token" />

    <RouterView />
  </div>
</template>

<style scoped></style>
