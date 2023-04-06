import { createBigPhoto } from './full-size.js';

const container = document.querySelector('.pictures');

const createGallery = (pictures) => {
  container.addEventListener('click', (evt) => {
    const thumbnail = evt.target.closest('[data-another-picture-id]');
    if (!thumbnail) {
      return;
    }
    evt.preventDefault();
    const picture = pictures.find((item) => item.id === Number(thumbnail.dataset.anotherPictureId));
    createBigPhoto(picture);
  });

};

export { createGallery };
