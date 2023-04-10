import { sendData } from './api.js';

const APROVED_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;
const HASHTAGS_NUMBER = 5;
const TEXT_ERROR = 'Неверные хэштэги';

const uploadForm = document.querySelector('.img-upload__form');
const textHashtags = document.querySelector('.text__hashtags');
const submitButton = document.querySelector('#upload-submit');

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'img-upload__field-wrapper__error'
});

const hasDuplicates = (tags) => {
  const lowerCaseTags = tags.map((item) => item.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};
const hasValidCount = (tags) => tags.length <= HASHTAGS_NUMBER;
const hasAprovedSymbols = (item) => APROVED_SYMBOLS.test(item);

const validateHashtags = (value) => {
  const tags = value.trim().split(' ').filter((tag) => tag.trim().length);
  return hasDuplicates(tags) && hasValidCount(tags) && tags.every(hasAprovedSymbols);
};

pristine.addValidator(textHashtags, validateHashtags, TEXT_ERROR);

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Идет отправка....';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};

const setUserFormSubmit = (onSuccess, onError) => {
  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendData(new FormData(evt.target))
        .then(onSuccess)
        .catch(onError)
        .finally(unblockSubmitButton);
    }
  });
};


export { setUserFormSubmit };
