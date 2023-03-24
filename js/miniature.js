// модуль для отрисовки миниатюр
import { exit } from './data.js';
// шаблон изображения
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

// список в который мы будем добавлять изображения
const pictures = document.querySelector('.pictures');
const fragment = document.createDocumentFragment();

const createMiniature = () => {
  exit.forEach(({ url, likes, comments }) => {
    const anotherPicture = pictureTemplate.cloneNode(true);
    anotherPicture.querySelector('.picture__img').src = url;
    anotherPicture.querySelector('.picture__likes').textContent = likes;
    anotherPicture.querySelector('.picture__comments').textContent = comments.length;

    fragment.append(anotherPicture);
  });

  pictures.append(fragment);
};

export { createMiniature };


