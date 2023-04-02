const APROVED_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;
const HASHTAGS_NUMBER = 5;
const TEXT_ERROR = 'Хэш-теги должны начинаться с #, разделяться пробелами, содержать только буквы и цифры, иметь длину от 2 до 20 символов, не дублироваться и не больше 5 штук';

const uploadForm = document.querySelector('.img-upload__form');
const textHashtags = document.querySelector('.text__hashtags');

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
  hasDuplicates(tags);
  hasValidCount(tags);
  tags.every(hasAprovedSymbols);
};

uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.addValidator(textHashtags, validateHashtags, TEXT_ERROR);
});
