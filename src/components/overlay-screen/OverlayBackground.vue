<template>
  <div
    class="overlay"
    v-if="overlayEnabled"
    @click.self="closeOverlay"
  >
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'OverlayBackground',
    props:{
      overlayEnabled: {
        type: Boolean,
        default: () => false,
      },
    },
    methods: {
      closeOverlay() {
        this.$emit('closeOverlay');
      },
    },
  };
</script>

<style>
  .overlay {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--overlay-background-color);
  }
</style>
