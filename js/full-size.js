// модуль отвечает за отрисовку окна с полноразмерным изображением
import { isEscapeKey } from './util.js';
import {createMiniature} from "./miniature.js";

const bigPicture = document.querySelector('.big-picture');
const openButton = document.querySelector('.pictures');
const closeButton = bigPicture.querySelector('#picture-cancel');
const commentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');


// открытие окна с полноразмерным изображение
const openBigPicture = () => {
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
  commentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
   createBigPhoto();
  document.addEventListener('keydown', onDocumentKeydownEsc);
};

// закрытие окна по нажатию клавиши Esc
const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydownEsc);
};

const onDocumentKeydownEsc = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
};

openButton.addEventListener('click', () => openBigPicture());
closeButton.addEventListener('click', () => closeBigPicture());


// отрисовка большого изображения
const bigPictureImg = document.querySelector('.big-picture__img img');
const bigPictureLikes = bigPicture.querySelector('.likes-count');
const bigPictureCommentsCount = bigPicture.querySelector('.comments-count');
const bigPictureComment = bigPicture.querySelector('.social__comments');
const bigPictureDescription = bigPicture.querySelector('.social__caption');


const createBigPhoto = ({url, description, likes}) => {
  bigPictureImg.src = url;
  bigPictureLikes.textContent = likes;
  bigPictureCommentsCount.textContent = comments.length;
  bigPictureDescription = description;
};


// создание комментариев
// const commentAvatar = comment.querySelector('.social__picture');
// const commentMessage = comment.querySelector('.social__text');

// const renderComment = (({avatar, name, message}) => {
//   const comment = commentItem.cloneNode(true);
//   commentAvatar.src = avatar;
//   commentAvatar.alt = name;
//   commentMessage.textContent = message;

//   return comment;
// });
