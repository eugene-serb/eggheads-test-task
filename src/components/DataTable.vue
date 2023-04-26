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
      setLikes(likes) {
        localStorage.setItem('likes', JSON.stringify(likes));
      },
      handleLike(id) {
        const item = this.webix.getItem(id);
        const likes = this.likes;

        if (item.id in likes) {
          delete likes[item.id];
        } else {
          likes[item.id] = true;
        }

        this.setLikes(likes);
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

  .table__column_blue {
    text-align: left;
    font-size: var(--table-column-font-size);
    line-height: var(--table-column-font-size);
    color: var(--color-blue);
  }

  .table__image-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 40px;
    height: 40px;
    margin: 0;
    padding: 0;
    border-radius: 16px;
    overflow: hidden;
  }

  .table__image {
    width: 36px;
  }

  .table__like-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 40px;
    height: 40px;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  .table__like {
    width: 28px;
  }

  .table__position-container {
    text-align: center;
  }

  .table__position-rate {
    margin: 0 0 0 4px;
    padding: 4px 8px;
    border-radius: 4px;
    background-color: var(--color-grey);
    color: #FFFFFF;
  }

  .table__position-rate_plus {
    background-color: var(--color-green);
  }

  .table__position-rate_minus {
    background-color: var(--color-red);
  }
</style>
