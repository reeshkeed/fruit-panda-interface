<script setup>
import { RouterView } from 'vue-router';
import NavbarMenu from './components/layout/NavbarMenu.vue';
</script>

<template>
  <div class="app">
    <NavbarMenu />

    <RouterView />
  </div>
</template>

<style scoped></style>
