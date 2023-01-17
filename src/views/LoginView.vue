<template>
  <div
    class="login bg-gradient-to-r from-dark-100 to-dark-500 h-screen w-screen grid place-content-center"
  >
    <div class="login-card w-80 flex flex-col items-center">
      <img alt="Girish Daloso" class="h-32 w-32" src="@/assets/logo.svg" />
      <h1 class="mb-5 text-white font-thin text-2xl font-sans">Fruit Panda</h1>

      <input class="input" placeholder="Username" />
      <input class="input" placeholder="Password" />

      <button class="bg-dark-100 text-white rounded-md w-full p-3">
        Login
      </button>
    </div>
  </div>
</template>

<style>
.login-card .input {
  @apply mb-2 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400
  focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md
  sm:text-sm focus:ring-1;
}
</style>
