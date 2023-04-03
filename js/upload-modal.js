import { isEscapeKey } from './util.js';

const uploadImgForm = document.querySelector('.img-upload__overlay');
const uploadImgButton = document.querySelector('#upload-file');
const downloadButton = document.querySelector('.img-upload');
const cancelUploadImgButton = document.querySelector('#upload-cancel');
const textHashtags = document.querySelector('.text__hashtags');
const textDescription = document.querySelector('.text__description');

const onTextEscPreventation = (evt) => {
  if (isEscapeKey(evt)) {
    evt.stopPropagation();
  }
};

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUploadForm();
  }
};

const openUploadForm = () => {
  uploadImgForm.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  textHashtags.addEventListener('keydown', onTextEscPreventation);
  textDescription.addEventListener('keydown', onTextEscPreventation);
};

const closeUploadForm = () => {
  uploadImgForm.classList.add('hidden');
  document.body.classList.remove('modal-open');
  uploadImgButton.value = '';
  document.removeEventListener('keydown', onDocumentKeydown);
  textHashtags.removeEventListener('keydown', onTextEscPreventation);
  textDescription.removeEventListener('keydown', onTextEscPreventation);
};

downloadButton.addEventListener('change', openUploadForm);
cancelUploadImgButton.addEventListener('click', closeUploadForm);
