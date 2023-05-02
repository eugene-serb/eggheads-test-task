<template>
  <OverlayBackground
    :overlayEnabled="overlayEnabled" 
    @closeOverlay="closeOverlay"
  >
    <OverlayModal
      @closeOverlay="closeOverlay"
    >
      <slot />
    </OverlayModal>
  </OverlayBackground>
</template>

<script>
  import OverlayBackground from '@/components/overlay-screen/OverlayBackground.vue';
  import OverlayModal from '@/components/overlay-screen/OverlayModal.vue';

  export default {
    name: 'OverlayScreen',
    components: {
      OverlayBackground,
      OverlayModal,
    },
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
