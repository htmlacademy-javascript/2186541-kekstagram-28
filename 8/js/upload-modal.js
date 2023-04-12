// в этом модуле добавила отрисовку пользовательского фото

import { isEscapeKey } from './util.js';
import { removeSlider } from './filters.js';
import { showSuccess } from './popups.js';

const uploadImgForm = document.querySelector('.img-upload__overlay');
const uploadImgButton = document.querySelector('#upload-file');
const downloadButton = document.querySelector('.img-upload');
const cancelUploadImgButton = document.querySelector('#upload-cancel');
const textHashtags = document.querySelector('.text__hashtags');
const textDescription = document.querySelector('.text__description');
const imgPreview = document.querySelector('.img-upload__preview img');
const scaleController = document.querySelector('.scale__control--value');
const IMG_TYPES = ['jpg', 'jpeg', 'png'];

uploadImgButton.addEventListener('change', () => {
  const file = uploadImgButton.files[0];
  const fileName = file.name.toLowerCase();
  const matches = IMG_TYPES.some((ending) => fileName.endsWith(ending));
  if (matches) {
    imgPreview.src = URL.createObjectURL(file);
  }
});

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

function closeUploadForm() {
  uploadImgForm.classList.add('hidden');
  document.body.classList.remove('modal-open');
  removeSlider();
  uploadImgButton.value = '';
  scaleController.value = '100%';
  imgPreview.style.transform = '';
  imgPreview.removeAttribute('class');
  imgPreview.removeAttribute('style');
  imgPreview.style.filter = '';
  textHashtags.value = '';
  textDescription.value = '';
  document.removeEventListener('keydown', onDocumentKeydown);
  textHashtags.removeEventListener('keydown', onTextEscPreventation);
  textDescription.removeEventListener('keydown', onTextEscPreventation);
}

const onSuccess = () => {
  showSuccess();
  closeUploadForm();
};

downloadButton.addEventListener('change', openUploadForm);
cancelUploadImgButton.addEventListener('click', closeUploadForm);

export { closeUploadForm, openUploadForm, onSuccess };
