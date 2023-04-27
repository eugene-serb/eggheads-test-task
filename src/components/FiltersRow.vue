<template>
  <div class="filters-row">
    <div class="filters-row__likes-container">
      <input
        id="likeInput"
        type="checkbox"
        @change="handleLikes"
      />
      <label for="likeInput">Только избранное</label>
    </div>
  </div>
</template>

<script>
  /* eslint-disable no-undef */

  export default {
    name: 'FiltersRow',
    methods: {
      handleLikes() {
        $$('table').filterByAll()
      },
    },
  };
</script>

<style>
  .filters-row {
    padding: 0;
    margin: 16px 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
  }

  .filters-row__likes-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 0 4px;
  }
</style>
