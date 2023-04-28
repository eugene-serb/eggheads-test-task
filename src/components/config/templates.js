'use strict';

const position = (item) => {
  let styles = '';

  if (item.rate > 0) {
    styles = 'table__position-rate_plus';
  } else if (item.rate < 0) {
    styles = 'table__position-rate_minus';
  }

  return `
    <div class="table__position-container">
      <span>${item.position}</span>
      <span class="table__position-rate ${styles}">${item.rate}</span>
    </div>
  `;
};

const image = (item) => {
  return `
    <div class="table__thumb-container">
      <img class="table__thumb" src="/assets/thumbs/${item.image}" />
    </div>
  `;
};

const like = (item) => {
  return `
    <div class="table__like-container">
      <img class="table__like" src="/assets/icons/${
        (item.like)
          ? 'favorite_black_24dp.svg'
          : 'favorite_border_black_24dp.svg'
      }" />
    </div>
  `;
};

const templates = {
  position,
  image,
  like,
};

export default templates;
