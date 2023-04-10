import './full-size.js';
import './upload-modal.js';
import './scale.js';
import './photo-filtration.js';
import { getData } from './api.js';
import './filters.js';
import './upload-form-validation.js';
import { createMiniature } from './miniature.js';
import { createGallery } from './gallery.js';
import { setUserFormSubmit } from './upload-form-validation.js';
import { onSuccess } from './upload-modal.js';
import { showAlert } from './util.js';
import { createFilters } from './photo-filtration.js';
import { showError } from './popups.js';

getData()
  .then((serverPhotos) => {
    createMiniature(serverPhotos);
    createGallery(serverPhotos);
    createFilters(serverPhotos);
  })
  .catch(() => {
    showAlert('Не удалось загрузить данные. Попробуйте обновить страницу');
  });

setUserFormSubmit(onSuccess, showError);
