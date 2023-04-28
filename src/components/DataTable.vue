<template>
  <div id="table"></div>
</template>

<script>
  /* eslint-disable no-undef */

  import getConfig from '@/components/config/getConfig.js';

  export default {
    name: 'DataTable',
    props: {
      tableID: {
        type: String,
        required: true,
      },
      products: {
        type: Array,
        default: () => [],
      },
    },
    computed: {
      likes() {
        return this.getLikes();
      },
      computedProducts() {
        const products = this.products;

        products.forEach((item) => {
          if (item.id in this.likes) {
            item.like = true;
          }
        });

        return products;
      },
      config() {
        return getConfig({
          tableID: this.tableID,
          products: this.computedProducts,
          handleLike: this.handleLike,
        });
      },
    },
    methods: {
      init() {
        webix.ready(() => {
          this.table = webix.ui(this.config, this.$el);

          this.table.registerFilter(
            document.getElementById('likeInput'),
            {
              columnId: 'like',
              prepare: function (filter) {
                return filter;
              },
              compare: function (cell, filter) {
                if (filter) {
                  return cell === true;
                }

                return true;
              },
            },
            {
              getValue: function (el) {
                return el.checked;
              },
              setValue: function (el, value) {
                el.checked = value;
              },
            },
          );

          this.table.registerFilter(
            document.getElementById('search'),
            {
              columnId: 'any',
              prepare: function (filter) {
                return filter;
              },
              compare: function (cell, filter, item) {
                if (filter) {
                  return (
                    item.sku.toLowerCase().includes(filter) ||
                    item.name.toLowerCase().includes(filter) ||
                    item.brand.toLowerCase().includes(filter) ||
                    item.merchant.toLowerCase().includes(filter)
                  );
                }

                return true;
              },
            },
            {
              getValue: function (target) {
                return target.value;
              },
              setValue: function (target, value) {
                target.value = value;
              },
            },
          );
        });
      },
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
        const item = this.table.getItem(id);
        const likes = this.likes;

        if (item.id in likes) {
          delete likes[item.id];
        } else {
          likes[item.id] = true;
        }

        item.like = !item.like;

        this.setLikes(likes);
        this.table.updateItem(id, item);
      },
    },
    mounted() {
      this.init();
    },
  };
</script>

<style>
  #table {
    width: 100%;
    overflow: hidden;
  }

  .table__header {
    font-size: var(--table-header-font-size);
    font-weight: 500;
    border-right: 1px solid var(--table-header-border-color) !important;
  }

  [section='header'] > .webix_hs_center > div:last-child > .table__header {
    border-right: none !important;
  }

  .table__header_hidden {
    color: transparent;
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

  .table__thumb-container {
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

  .table__thumb {
    width: 36px;
  }

  .table__image {
    width: 250px
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
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 0 8px;
  }

  .table__position-rate {
    padding: 0;
    margin: 0;
    border-radius: 4px;
    max-height: 28px;
    min-width: 28px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0 4px;
    background-color: var(--color-grey);
    color: var(--color-white);
  }

  .table__position-rate_plus {
    background-color: var(--color-green-dark);
    color: var(--color-green-light);
  }

  .table__position-rate_minus {
    background-color: var(--color-red);
  }
</style>
