<template>
  <button class="table-settings">
    <img src="/assets/icons/settings_black_24dp.svg" />
    <span>Настройка таблицы</span>
  </button>
</template>

<script>
  /* eslint-disable no-undef */

  export default {
    name: 'TableSettings',
    props: {
      tableID: {
        type: String,
        required: true,
      },
    },
  };
</script>

<style>
  .table-settings {
    margin: 0 0 0 -20px;
    padding: 4px;
    width: 200px;
    height: 28px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    gap: 0 4px;
  }

    .table-settings > img {
      width: 16px;
      height: 16px;
    }
</style>
