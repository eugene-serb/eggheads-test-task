<template>
  <div id="table"></div>
</template>

<script>
  /* eslint-disable no-undef */

  import getConfig from '@/components/getConfig.js';

  export default {
    name: 'DataTable',
    props: {
      products: {
        type: Array,
        default: () => [],
      },
    },
    computed: {
      likes() {
        return this.getLikes();
      },
      config() {
        return getConfig({
          products: this.products,
          likes: this.likes,
          handleLike: this.handleLike,
        });
      },
    },
    methods: {
      getLikes() {
        const raw = localStorage.getItem('likes');

        try {
          return (raw) ? JSON.parse(raw) : {};
        } catch (error) {
          console.error(error);
          return {};
        }
      },
      setLikes() {
        localStorage.setItem('likes', JSON.stringify(this.likes));
      },
      handleLike(id) {
        const item = this.webix.getItem(id);

        item.like = !item.like;
        
        this.likes[item.id] = item.like;

        this.setLikes();
        this.webix.updateItem(id, item);
      },
    },
    mounted() {
      webix.ready(() => {
        this.webix = webix.ui(this.config, this.$el);
      });
    },
  };
</script>

<style>
  #table {
    height: 100vh;
    width: 100vw;
  }

  .table__header {
    font-size: var(--table-header-font-size);
    font-weight: 500;
  }

  .table__column {
    text-align: left;
    font-size: var(--table-column-font-size);
    line-height: var(--table-column-font-size);
  }

  .table__image-container {
    width: 36px;
    height: 36px;
    margin: 2px 0 0 0;
    padding: 0;
    border-radius: 15px;
    overflow: hidden;
  }

  .table__image {
    width: 36px;
  }

  .table__like-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 36px;
    height: 36px;
    margin: 2px 0 0 0;
    padding: 0;
    border-radius: 15px;
    overflow: hidden;
  }

  .table__like {
    width: 28px;
  }
</style>
