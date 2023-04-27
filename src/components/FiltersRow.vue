<template>
  <div class="filters-row">
    <SearchBox :tableID="tableID" />
    <LikesBox :tableID="tableID" />
  </div>
</template>

<script>
  import SearchBox from '@/components/SearchBox.vue';
  import LikesBox from '@/components/LikesBox.vue';

  export default {
    name: 'FiltersRow',
    components: {
      SearchBox,
      LikesBox,
    },
    props: {
      tableID: {
        type: String,
        required: true,
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
