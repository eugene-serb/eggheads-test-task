<template>
  <DataTable :products="products" />
</template>

<script>
  import DataTable from '@/components/DataTable.vue';
  import products from '@/assets/data.json';

  export default {
    name: 'App',
    components: { 
      DataTable,
    },
    data() {
      return {
        products,
      };
    },
  };
</script>

<style>
  :root {
    --step-size: 4px;
    --color-black: #000000;
    --color-blue: #345be0;
    --font-family: Avenir, Helvetica, Arial, sans-serif;
    --font-color: var(--color-black);
    --table-header-font-size: calc(var(--step-size) * 4);
    --table-column-font-size: calc(var(--step-size) * 3);
  }

  *, ::after, ::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #app {
    font-family: var(--font-family);
    color: var(--font-color);
    text-align: center;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
