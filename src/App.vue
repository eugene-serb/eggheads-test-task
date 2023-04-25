<template>
  <div id="table"></div>
</template>

<script>
  /* eslint-disable no-undef */
  import products from '@/assets/data.json';

  export default {
    name: 'App',
    components: {},
    data() {
      const layout = {
        rows: [
          {
            view: 'template',
            type: 'header',
            template: 'Webix Lesson',
          },
          {
            view: 'datatable',
            autoConfig: true,
            autowidth: false,
            autoheight: true,
            resizeColumn: true,
            dragColumn: 'order',
            rowHeight: 40,
            data: products,
            columns: [
              {
                id: 'image',
                css: 'table__column',
                header: [
                  { text: 'Фото', css: 'table__header' },
                ],
                template: (item) => `<div class="table__image-container"><img class="table__image" src="/assets/thumbs/${item.image}" /></div>`,
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
          },
        ],
      };

      return {
        layout,
      };
    },
    mounted() {
      webix.ready(() => {
        webix.ui(this.layout, this.$el);
      });
    }
  }
</script>

<style>
  :root {
    --step-size: 4px;
    --color-black: #000000;
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
    margin: 4px 0 0 0;
    padding: 0;
    border-radius: 15px;
    overflow: hidden;
  }

  .table__image {
    width: 36px;
  }
</style>
