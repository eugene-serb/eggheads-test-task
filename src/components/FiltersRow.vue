<template>
  <div class="filters-row">
    <div class="search">
      <img
        class="search__image"
        src="/assets/icons/search_black_24dp.svg"
      />
      <input
        id="search"
        class="search__input"
        type="search"
        placeholder="Поиск"
        @input="handleFilter"
      />
    </div>
    <div class="likes-box">
      <input
        id="likeInput"
        type="checkbox"
        @change="handleFilter"
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
      handleFilter() {
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
    gap: 16px;
  }

  .search {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-end;
  }

  .search__input {
    margin: 0 0 0 -20px;
    padding: 4px;
    width: 200px;
    height: 28px;
  }

  .search__image {
    position: relative;
    bottom: 4px;
    left: 175px;
    width: 20px;
    height: 20px;
  }

  .likes-box {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 0 4px;
  }
</style>
