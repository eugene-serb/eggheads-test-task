'use strict';

/* eslint-disable no-undef */

import templates from '@/components/templates.js';

const getConfig = ({ products, handleLike }) => {
  return {
    id: 'table',
    view: 'datatable',
    autoConfig: true,
    autowidth: false,
    autoheight: true,
    resizeColumn: {
      size: 4,
    },
    dragColumn: 'order',
    scroll: true,
    rowHeight: 40,
    data: products,
    columns: [
      {
        id: 'loss',
        sort: 'int',
        css: 'table__column',
        header: [
          {
            text: 'Упущенный %',
            css: 'table__header'
          },
        ],
        minWidth: 25,
        width: 60,
        maxWidth: 150,
      },
      {
        id: 'position',
        sort: 'int',
        css: 'table__column',
        header: [
          {
            text: 'Позиция',
            css: 'table__header'
          },
        ],
        template: templates.position,
        minWidth: 50,
        width: 100,
        maxWidth: 150,
      },
      {
        id: 'image',
        css: 'table__column',
        header: [
          {
            text: 'Фото',
            css: 'table__header'
          },
        ],
        template: templates.image,
        minWidth: 40,
        width: 60,
        maxWidth: 80,
      },
      {
        id: 'sku',
        sort: 'string',
        css: 'table__column table__column_blue',
        header: [
          {
            text: 'Артикул',
            css: 'table__header'
          },
        ],
      },
      {
        id: 'like',
        sort: 'string',
        css: 'table__column',
        header: [
          {
            text: '',
            css: 'table__header'
          },
        ],
        template: (item) => templates.like(item),
        minWidth: 40,
        width: 60,
        maxWidth: 80,
      },
      {
        id: 'schedule',
        sort: 'string',
        header: [
          {
            text: 'График продаж',
            css: 'table__header'
          },
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
        css: 'table__column table__column_blue',
        header: [
          {
            text: 'Имя',
            css: 'table__header'
          },
        ],
        minWidth: 200,
        width: 250,
        maxWidth: 300,
      },
      {
        id: 'brand',
        sort: 'string',
        css: 'table__column table__column_blue',
        header: [
          {
            text: 'Бренд',
            css: 'table__header'
          },
        ],
      },
      {
        id: 'merchant',
        sort: 'string',
        css: 'table__column table__column_blue',
        header: [
          {
            text: 'Продавец',
            css: 'table__header'
          },
        ],
      },
      {
        id: 'category',
        sort: 'string',
        css: 'table__column',
        header: [
          {
            text: 'Группа',
            css: 'table__header'
          },
        ],
      },
      {
        id: 'remain',
        sort: 'int',
        css: 'table__column',
        header: [
          {
            text: 'Остаток',
            css: 'table__header'
          },
        ],
      },
      {
        id: 'reviews',
        sort: 'int',
        css: 'table__column',
        header: [
          {
            text: 'Отзывы',
            css: 'table__header'
          },
        ],
      },
      {
        id: 'rating',
        sort: 'int',
        css: 'table__column',
        header: [
          {
            text: 'Рейтинг',
            css: 'table__header'
          },
        ],
      },
      {
        id: 'cost',
        sort: 'int',
        css: 'table__column',
        header: [
          {
            text: 'Цена',
            css: 'table__header'
          },
        ],
      },
    ],
    onClick: {
      'table__like': (e, id) => handleLike(id),
    },
  };
};

export default getConfig;
