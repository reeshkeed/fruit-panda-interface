<script>
export default {
  name: 'BaseButton',
  props: {
    /**
     * Base button background
     * default dark
     */
    variant: {
      type: String,
      default: 'dark',
    },

    /**
     * Base button text color
     * default black
     */
    color: {
      type: String,
      default: 'text-black',
    },

    /**
     * Enable loading state
     */
    loading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<template>
  <button
    :class="`btn bg-${variant}-500 ${color} hover:bg-${variant}-600 active:bg-${variant}-400 rounded-md w-full p-3`"
  >
    <slot v-if="loading" name="loader">
      <span class="loader"></span>
    </slot>
    <slot v-else></slot>
  </button>
</template>

<style></style>
