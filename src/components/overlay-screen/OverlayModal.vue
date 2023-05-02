<template>
  <div class="modal">
    <div class="modal__close-container">
      <div
        class="modal__close-icon"
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

  .modal__close-icon {
    visibility: hidden;
  }

    .modal__close-icon::before {
      content: '';
      visibility: visible;
      display: block;
      width: 24px;
      height: 24px;
      background-image: url('../../../public/assets/icons/close_black_24dp.svg');
      background-size: 24px;
      background-repeat: no-repeat;
    }
</style>
