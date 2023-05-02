<template>
  <div class="filters-row">
    <div class="filters-row__left-container">
      <SearchBox
        :tableID="tableID"
        :SearchToReset="SearchToReset"
        @searchBoxReloaded="searchBoxReloaded"
      />
      <LikesBox
        :tableID="tableID"
        :LikesToReset="LikesToReset"
        @likesBoxReloaded="likesBoxReloaded"
      />
    </div>
    <div class="filters-row__right-container">
      <TableSettings
        :tableID="tableID"
        @reset="reset"
      />
    </div>
  </div>
</template>

<script>
  import SearchBox from '@/components/SearchBox.vue';
  import LikesBox from '@/components/LikesBox.vue';
  import TableSettings from '@/components/table-settings/TableSettings.vue';

  export default {
    name: 'FiltersRow',
    components: {
      SearchBox,
      LikesBox,
      TableSettings,
    },
    props: {
      tableID: {
        type: String,
        required: true,
      },
    },
    data() {
      return {
        SearchToReset: false,
        LikesToReset: false,
      };
    },
    methods: {
      reset() {
        this.SearchToReset = true;
        this.LikesToReset = true;
      },
      searchBoxReloaded() {
        this.SearchToReset = false;
      },
      likesBoxReloaded() {
        this.LikesToReset = false;
      },
    },
  };
</script>

<style>
  .filters-row {
    padding: 0;
    margin: 16px 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 16px 0;
  }

  .filters-row__left-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 16px 0;
  }

  @media (min-width: 768px) {
    .filters-row {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      gap: 0 16px;
    }

    .filters-row__left-container {
      flex-direction: row;
      align-items: center;
      gap: 0 16px;
    }
  }
</style>
