<template>
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
      @input="handle"
    />
  </div>
</template>

<script>
  /* eslint-disable no-undef */

  export default {
    name: 'SearchBox',
    props: {
      tableID: {
        type: String,
        required: true,
      },
    },
    methods: {
      handle() {
        $$(this.tableID).filterByAll()
      },
    },
  };
</script>

<style>
  .search {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-end;
  }

    .search:has(.search__input:focus) > .search__image,
    .search:has(.search__input:not(:placeholder-shown)) > .search__image {
      display: none;
    }

    .search:has(.search__input:focus) > .search__input,
    .search:has(.search__input:not(:placeholder-shown)) > .search__input {
      margin: 0;
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
</style>
