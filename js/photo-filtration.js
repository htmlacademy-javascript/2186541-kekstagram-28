import { getRandomUniqueNumber, debounce } from './util.js';
import { createMiniature } from './miniature.js';

const RANDOM_PICTURES = 10;
const imgFilters = document.querySelector('.img-filters');
const imgFilterButtons = document.querySelectorAll('.img-filters__button');
const buttonsContainer = document.querySelector('.img-filters__form');
const usersPicturesList = document.querySelector('.pictures');

const filterTypes = {
  'filter-default': showDefault,
  'filter-random': showRandom,
  'filter-discussed': showDiscussed,
};

const showFiltration = () => imgFilters.classList.remove('img-filters--inactive');

const disactivateButtons = () => {
  imgFilterButtons.forEach((item) => item.classList.remove('img-filters__button--active'));
};

const deletePictures = () => usersPicturesList.querySelectorAll('.picture').forEach((element) => element.remove());

function showDefault(array) {
  return array;
}

function showDiscussed(array) {
  return array.slice().sort((a, b) => b.comments.length - a.comments.length);
}

function showRandom(array) {
  const getRandomId = getRandomUniqueNumber(0, 24);
  const newRandomPictures = [];

  for (let i = 0; i < RANDOM_PICTURES; ++i) {
    const number = getRandomId();
    newRandomPictures.push(array[number]);
  }

  return newRandomPictures;
}

const startFilration = (serverPhotos) => {
  buttonsContainer.addEventListener('click', debounce((evt) => {
    const chosenFilterButton = evt.target.closest('.img-filters__button');
    if (chosenFilterButton) {
      disactivateButtons();
      chosenFilterButton.classList.add('img-filters__button--active');
      const filtratedPhotos = filterTypes[chosenFilterButton.id](serverPhotos);
      deletePictures();
      createMiniature(filtratedPhotos);
    }
  }));
};

const createFilters = (serverPhotos) => {
  showFiltration();
  startFilration(serverPhotos);
};

export { createFilters };

