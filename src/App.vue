<template>
  <section class="container app">
    <h1 class="app__header">Товары категории</h1>
    <FiltersRow :tableID="tableID" />
    <DataTable
      :tableID="tableID"
      :products="products"
    />
  </section>
</template>

<script>
  import products from '@/assets/products.json';
  import FiltersRow from '@/components/FiltersRow.vue';
  import DataTable from '@/components/DataTable.vue';

  export default {
    name: 'App',
    components: {
      FiltersRow,
      DataTable,
    },
    data() {
      return {
        tableID: 'webix-table',
        products,
      };
    },
  };
</script>

<style>
  :root {
    --step-size: 4px;
    --color-black: #000000;
    --color-black-transparent: #000000BB;
    --color-white: #FFFFFF;
    --color-blue: #345be0;
    --color-grey: #b7b7b7;
    --color-grey-light: #DADEE0;
    --color-red: #f18578;
    --color-green-dark: #e6f9ed;
    --color-green-light: #08ba5e;
    --default-font-family: Avenir, Helvetica, Arial, sans-serif;
    --default-font-color: var(--color-black);
    --default-font-size: calc(var(--step-size) * 3);
    --table-header-font-size: calc(var(--step-size) * 4);
    --table-header-border-color: var(--color-grey-light);
    --table-column-font-size: calc(var(--step-size) * 3);
    --overlay-background-color: var(--color-black-transparent);
    --overlay-modal-background-color: var(--color-white);
  }

  *, ::after, ::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: var(--default-font-size);
    line-height: var(--default-font-size);
  }

  #app {
    font-family: var(--default-font-family);
    color: var(--default-font-color);
    text-align: center;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .container {
    padding: 0;
    margin: 0 auto;
    width: 100%;
  }

  .app {
    margin-top: 16px;
  }

  .app__header {
    text-align: start;
  }

  @media (min-width: 768px) {
    .container {
      width: 640px;
    }

    .app {
      margin-top: 32px;
    }
  }

  @media (min-width: 1024px) {
    .container {
      width: 768px;
    }
  }

  @media (min-width: 1440px) {
    .container {
      width: 1280px;
    }
  }
</style>
