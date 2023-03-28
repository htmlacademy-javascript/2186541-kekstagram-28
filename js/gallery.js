import { createBigPhoto } from './full-size.js';

const container = document.querySelector('.pictures');

const createGallery = (pictures) => {
  container.addEventListener('click', (evt) => {
    const thumbnail = evt.target.closest('[data-another-picture-id]');
    console.log(thumbnail);
    if (!thumbnail) {
      return;
    }
    const picture = pictures.find((item) => Number(thumbnail.dataset.id === item.id));

    createBigPhoto(picture);
  });

};

export { createGallery };
