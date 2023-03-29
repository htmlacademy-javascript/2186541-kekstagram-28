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
const commentItemTemplate = document.querySelector('.social__comment').cloneNode(true);

// Отрисовка комментариев
let shownComments = 0;
const COMMENTS_NUMBER = 5;

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
    const currentCountOfComments = array.slice(shownComments, shownComments + COMMENTS_NUMBER);
    shownComments += currentCountOfComments.length;
    if (shownComments >= array.length) {
      return;
    }
    createComment(currentCountOfComments);
    commentCount.textContent = `${shownComments} из ${array.length} комментариев`;
  }
};

function onSocialCommentsLoaderClick(evt) {
  evt.preventDefault();
  createComment(generateComments());
}

// Главная функция по отрисовке большого фото
const createBigPhoto = ({ url, description, comments, likes }) => {
  bigPictureImg.src = url;
  bigPictureLikes.textContent = likes;
  bigPictureCommentsCount.textContent = comments.length;
  bigPictureCaption.textContent = description;
  commentContainer.innerHTML = '';
  generateComments(comments);
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
  createBigPhoto();
  commentsLoader.addEventListener('click', onSocialCommentsLoaderClick);
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
