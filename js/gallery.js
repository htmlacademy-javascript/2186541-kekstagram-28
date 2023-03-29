import { createBigPhoto } from './full-size.js';

const container = document.querySelector('.pictures');

const createGallery = (pictures) => {
  container.addEventListener('click', (evt) => {
    const thumbnail = evt.target.closest('[data-another-picture-id]');
    if (!thumbnail) {
      return;
    }
    const picture = pictures.find((item) => Number(item.id === +thumbnail.dataset.anotherPictureId));

    createBigPhoto(picture);
  });

};

export { createGallery };
