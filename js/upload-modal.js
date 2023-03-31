// import { isEscapeKey } from './util.js';

// const uploadImgForm = document.querySelector('.img-upload__overlay');
// const uploadImgButton = document.querySelector('#upload-file');
// const cancelUploadImgButton = document.querySelector('#upload-cancel');
// const textHashtags = uploadFormWindow.querySelector('.text__hashtags');
// const textDescription = uploadFormWindow.querySelector('.text__description');

// const onDocumentKeydown = (evt) => {
//   if (isEscapeKey(evt)) {
//     evt.preventDefault();
//     closeUploadForm();
//   }
// };

// const openUploadForm =() => {
//   uploadImgForm.classList.remove('hidden');
//   document.body.classList.add('modal-open');
//   document.addEventListener('keydown', onDocumentKeydown());
// };

// const closeUploadForm =() => {
//   uploadImgForm.classList.add('hidden');
//   document.body.classList.remove('modal-open');
//   document.removeEventListener('keydown', onDocumentKeydown());
// };

// uploadImgButton.addEventListener('click', openUploadForm());
// cancelUploadImgButton.addEventListener('click', closeUploadForm());
