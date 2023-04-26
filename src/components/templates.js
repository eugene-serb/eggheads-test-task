'use strict';

const image = (item) => {
  return `
    <div class="table__image-container">
      <img class="table__image" src="/assets/thumbs/${item.image}" />
    </div>
  `;
}

const like = (item, likes) => {
  return `
    <div class="table__like-container">
      <img class="table__like" src="/assets/icons/${
        (likes[item.id])
          ? 'favorite_black_24dp.svg'
          : 'favorite_border_black_24dp.svg'
      }" />
    </div>
  `;
};

const templates = {
  image,
  like,
};

export default templates;
