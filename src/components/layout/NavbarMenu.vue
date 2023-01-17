<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <header
    class="navbar bg-dark-500 flex justify-between items-center p-3 w-auto"
  >
    <img alt="Girish Daloso" class="h-16 w-16" src="@/assets/logo.svg" />

    <div class="">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
</template>

<style></style>
