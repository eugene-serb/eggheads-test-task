<template>
  <div class="filters-row">
    <SearchBox @handle="filter" />
    <LikesBox @handle="filter" />
  </div>
</template>

<script>
  /* eslint-disable no-undef */

  import SearchBox from '@/components/SearchBox.vue';
  import LikesBox from '@/components/LikesBox.vue';

  export default {
    name: 'FiltersRow',
    components: {
      SearchBox,
      LikesBox,
    },
    methods: {
      filter() {
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
</style>
