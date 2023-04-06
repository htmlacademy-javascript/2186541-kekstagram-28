// модуль для отрисовки миниатюр

// шаблон изображения
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

// список в который мы будем добавлять изображения
const pictures = document.querySelector('.pictures');
const fragment = document.createDocumentFragment();

const createMiniature = (array) => {
  array.forEach(({ url, likes, comments, id }) => {
    const anotherPicture = pictureTemplate.cloneNode(true);
    anotherPicture.querySelector('.picture__img').src = url;
    anotherPicture.querySelector('.picture__likes').textContent = likes;
    anotherPicture.querySelector('.picture__comments').textContent = comments.length;
    anotherPicture.dataset.anotherPictureId = id;

    fragment.append(anotherPicture);
  });

  pictures.append(fragment);
};

export { createMiniature, pictures};


