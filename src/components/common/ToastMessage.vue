<script>
export default {
  name: 'ToastMessage',
  props: {
    /**
     * Toggle show toast message
     */
    animate: {
      true: Boolean,
      default: false,
    },

    /**
     * Toast color theme
     * default green
     */
    color: {
      type: String,
      default: 'green',
    },
  },

  data() {
    return {
      isToggle: false,
      toggleInterval: '',
    };
  },

  watch: {
    animate: {
      /**
       * @param val is equal to animate current value
       * if val = true pass animate props value to isToggle
       * and call updateAnimate. If false clear interval
       * from the updateAnimate method.
       */
      handler(val) {
        if (val) {
          this.isToggle = this.animate;

          this.updateAnimate();
        } else {
          clearInterval(this.toggleInterval);
        }
      },

      immediate: true,
    },
  },

  methods: {
    /**
     * Update animate props after 1.5s to hide toast
     */
    updateAnimate() {
      this.toggleInterval = setInterval(() => {
        this.isToggle = false;

        this.$emit('update:animate', this.isToggle);
      }, 1500);
    },
  },
};
</script>

<template>
  <div
    :class="`toast-message bg-${color}-300 border-${color}-900 text-${color}-700 ${
      isToggle ? 'animate-fade-in-out visible' : 'hidden'
    }`"
  >
    <slot></slot>
  </div>
</template>

<style>
.toast-message {
  @apply border rounded-md px-6 py-3 fixed top-12 left-1/2 -translate-x-1/2;
}
</style>
