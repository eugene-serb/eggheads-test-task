<template>
  <div class="search">
    <input
      id="search"
      class="search__input"
      type="search"
      placeholder="Поиск"
      @input="handle"
      v-model="value"
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
      SearchToReset: {
        type: Boolean,
        default: () => false,
      },
    },
    data() {
      return {
        value: '',
      };
    },
    methods: {
      handle() {
        $$(this.tableID).filterByAll()
      },
    },
    watch: {
      SearchToReset(value) {
        if (value) {
          this.value = '';
          this.$emit('searchBoxReloaded');
        }
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

    .search:has(.search__input:focus)::before,
    .search:has(.search__input:not(:placeholder-shown))::before {
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

    .search::before {
      content: '';
      width: 20px;
      height: 20px;
      position: relative;
      bottom: 4px;
      left: 175px;
      background-image: url('../../public/assets/icons/search_black_24dp.svg');
      background-size: 20px;
      background-repeat: no-repeat;
    }
</style>
