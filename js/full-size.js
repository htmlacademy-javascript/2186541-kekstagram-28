// модуль отвечает за отрисовку окна с полноразмерным изображением
import { isEscapeKey } from './util.js';

const bigPicture = document.querySelector('.big-picture');
const openButton = document.querySelector('.pictures');
const closeButton = bigPicture.querySelector('#picture-cancel');
const commentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');

// отрисовка большого изображения
const bigPictureImg = document.querySelector('.big-picture__img img');
const bigPictureLikes = bigPicture.querySelector('.likes-count');
const bigPictureCommentsCount = bigPicture.querySelector('.comments-count');
const bigPictureCaption = bigPicture.querySelector('.social__caption');
const commentContainer = bigPicture.querySelector('.social__comments');
const commentItemTemplate = document.querySelector('.social__comment');

// Отрисовка комментариев
let shownComments = 0;
const COMMENTS_NUMBER = 5;
let commentsArray = [];

const createComment = (array) => {
  const commentsFragment = document.createDocumentFragment();
  array.forEach(({ avatar, message, name }) => {
    const commentItem = commentItemTemplate.cloneNode(true);
    commentItem.querySelector('.social__picture').src = avatar;
    commentItem.querySelector('.social__picture').alt = name;
    commentItem.querySelector('.social__text').textContent = message;
    commentsFragment.append(commentItem);
  });
  commentContainer.append(commentsFragment);
};

const generateComments = (array) => {
  if (array.length <= 5) {
    commentsLoader.classList.add('hidden');
    createComment(array);
    commentCount.textContent = `${array.length} из ${array.length} комментариев`;
  }
  else {
    debugger;
    shownComments += COMMENTS_NUMBER;
    if (shownComments >= array.length) {
      commentsLoader.classList.add('hidden');
      shownComments = array.length;
      createComment(array);
    }
    else {
      commentsArray = [];
      for (let i = 0; i < shownComments; i++) {
        commentsArray.push(array[i]);
      }
      createComment(commentsArray);
    }
    commentsArray = [];
    commentsArray = array;
  }
  commentCount.textContent = `${shownComments} из ${array.length} комментариев`;
};

const onSocialCommentsLoaderClick = (evt) => {
  evt.preventDefault();
  commentContainer.innerHTML = '';
  generateComments(commentsArray);
}

// Главная функция по отрисовке большого фото
const createBigPhoto = ({ url, description, comments, likes }) => {
  bigPictureImg.src = url;
  bigPictureLikes.textContent = likes;
  bigPictureCommentsCount.textContent = comments.length;
  bigPictureCaption.textContent = description;
  commentContainer.innerHTML = '';
  generateComments(comments);
  commentsLoader.addEventListener('click', onSocialCommentsLoaderClick);
};

const onDocumentKeydownEsc = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
};

// открытие и закрытие окна с полноразмерным изображение
const openBigPicture = () => {
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
  createBigPhoto();
  document.addEventListener('keydown', onDocumentKeydownEsc);
};

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  commentsLoader.removeEventListener('click', onSocialCommentsLoaderClick);
  document.removeEventListener('keydown', onDocumentKeydownEsc);
};

openButton.addEventListener('click', () => openBigPicture());
closeButton.addEventListener('click', () => closeBigPicture());

export { createBigPhoto };
