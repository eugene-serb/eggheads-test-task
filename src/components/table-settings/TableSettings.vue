<template>
  <button
    class="table-settings-button"
    @click="openOverlay"
  >
    <span>Настройка таблицы</span>
  </button>

  <TableSettingsOverlay 
    :tableID="tableID"
    :overlayEnabled="overlayEnabled"
    @closeOverlay="closeOverlay"
  />
</template>

<script>
  /* eslint-disable no-undef */

  import TableSettingsOverlay from '@/components/table-settings/TableSettingsOverlay.vue';

  export default {
    name: 'TableSettings',
    components: {
      TableSettingsOverlay,
    },
    props: {
      tableID: {
        type: String,
        required: true,
      },
    },
    data() {
      return {
        overlayEnabled: false,
      };
    },
    methods: {
      openOverlay() {
        this.overlayEnabled = true;
      },
      closeOverlay() {
        this.overlayEnabled = false;
      },
    },
  };
</script>

<style>
  .table-settings-button {
    margin: 0;
    padding: 4px;
    width: 200px;
    height: 28px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    gap: 0 4px;
  }

    .table-settings-button > span {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 0 4px;
    }

    .table-settings-button > span::before {
      content: '';
      width: 16px;
      height: 16px;
      background-image: url('../../../public/assets/icons/settings_black_24dp.svg');
      background-size: 16px;
      background-repeat: no-repeat;
    }
</style>
