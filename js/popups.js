import { isEscapeKey } from './util.js';

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');

const templateSelectors = {
  success: {
    button: '.success__button',
    inner: '.success__inner',
  },
  error: {
    button: '.error__button',
    inner: '.error__inner',
  },
};

const showMessage = (template, buttonSelector, innerSelector) => {
  const node = template.cloneNode(true);
  const button = node.querySelector(buttonSelector);
  const inner = node.querySelector(innerSelector);

  const onDocumentKeydownEsc = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closeMessage();
    }
  };

  function closeMessage() {
    node.remove();
    document.removeEventListener('keydown', onDocumentKeydownEsc);
  }

  document.body.append(node);
  document.addEventListener('keydown', onDocumentKeydownEsc);
  button.addEventListener('click', () => closeMessage());
  node.addEventListener('click', () => closeMessage());
  inner.addEventListener('click', (evt) => evt.stopPropagation());
};

const showSuccess = () => showMessage(successTemplate, templateSelectors.success.button, templateSelectors.success.inner);
const showError = () => showMessage(errorTemplate, templateSelectors.error.button, templateSelectors.error.inner);

export { showSuccess, showError };
