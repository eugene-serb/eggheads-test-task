<template>
  <div id="table"></div>
</template>

<script>
  /* eslint-disable no-undef */
  import templates from '@/components/templates.js';

  export default {
    name: 'DataTable',
    props: {
      products: {
        type: Array,
        default: () => [],
      },
    },
    data() {
      const config = {
        view: 'datatable',
        autoConfig: true,
        autowidth: false,
        autoheight: true,
        resizeColumn: true,
        dragColumn: 'order',
        rowHeight: 40,
        data: this.products,
        columns: [
          {
            id: 'image',
            css: 'table__column',
            header: [
              { text: 'Фото', css: 'table__header' },
            ],
            template: templates.image,
          },
          {
            id: 'sku',
            sort: 'string',
            css: 'table__column',
            header: [
              { text: 'Артикул', css: 'table__header' },
            ],
          },
          {
            id: 'like',
            sort: 'string',
            css: 'table__column',
            header: [
              { text: '', css: 'table__header' },
            ],
            template: templates.like,
          },
          {
            id: 'schedule',
            sort: 'string',
            header: [
              { text: 'График продаж', css: 'table__header' },
            ],
            css: 'table__column',
            template: webix.Sparklines.getTemplate({
              type: 'bar',
              width: 30,
            }),
            minWidth: 200,
            width: 250,
            maxWidth: 300,
          },
          {
            id: 'name',
            sort: 'string',
            css: 'table__column',
            header: [
              { text: 'Имя', css: 'table__header' },
            ],
            minWidth: 200,
            width: 250,
            maxWidth: 300,
          },
          {
            id: 'brand',
            sort: 'string',
            css: 'table__column',
            header: [
              { text: 'Бренд', css: 'table__header' },
            ],
          },
          {
            id: 'merchant',
            sort: 'string',
            css: 'table__column',
            header: [
              { text: 'Продавец', css: 'table__header' },
            ],
          },
          {
            id: 'category',
            sort: 'string',
            css: 'table__column',
            header: [
              { text: 'Группа', css: 'table__header' },
            ],
          },
          {
            id: 'remain',
            sort: 'int',
            css: 'table__column',
            header: [
              { text: 'Остаток', css: 'table__header' },
            ],
          },
          {
            id: 'reviews',
            sort: 'int',
            css: 'table__column',
            header: [
              { text: 'Отзывы', css: 'table__header' },
            ],
          },
          {
            id: 'rating',
            sort: 'int',
            css: 'table__column',
            header: [
              { text: 'Рейтинг', css: 'table__header' },
            ],
          },
          {
            id: 'cost',
            sort: 'int',
            css: 'table__column',
            header: [
              { text: 'Цена', css: 'table__header' },
            ],
          },
        ],
        onClick: {
          'table__like': (e, id) => this.handleLike(id),
        },
      };

      return {
        config,
      };
    },
    mounted() {
      webix.ready(() => {
        this.webix = webix.ui(this.config, this.$el);
      });
    },
    methods: {
      handleLike(id) {
        const item = this.webix.getItem(id);
        item.like = !item.like;
        this.webix.updateItem(id, item);
      },
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
