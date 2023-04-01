import { isEscapeKey } from './util.js';

const uploadImgForm = document.querySelector('.img-upload__overlay');
const uploadImgButton = document.querySelector('#upload-file');
const cancelUploadImgButton = document.querySelector('#upload-cancel');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUploadForm();
  }
};

const openUploadForm = () => {
  uploadImgForm.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown());
};

const closeUploadForm = () => {
  uploadImgForm.classList.add('hidden');
  document.body.classList.remove('modal-open');
  uploadImgButton.value = '';
  document.removeEventListener('keydown', onDocumentKeydown());
};

uploadImgButton.addEventListener('change', openUploadForm);
cancelUploadImgButton.addEventListener('click', closeUploadForm);
