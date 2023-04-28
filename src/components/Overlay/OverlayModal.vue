<template>
  <div class="modal">
    <div class="modal__close-container">
      <img
        src="/assets/icons/close_black_24dp.svg"
        @click.stop="closeOverlay"
      />
    </div>
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'OverlayModal',
    methods: {
      closeOverlay() {
        this.$emit('closeOverlay');
      },
    },
  };
</script>

<style>
  .modal {
    padding: 16px;
    margin: 0;
    width: 500px;
    z-index: 3;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background: var(--overlay-modal-background-color);
  }

  .modal__close-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
</style>
