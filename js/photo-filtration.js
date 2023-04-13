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

const buttonConditions = {
  ACTIVE: 'img-filters__button--active',
  INACTIVE: 'img-filters--inactive',
  DEFAULT: '.img-filters__button',
};

const disactivateButtons = () => {
  imgFilterButtons.forEach((item) => item.classList.remove(buttonConditions.ACTIVE));
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

const showFiltration = () => {
  imgFilters.classList.remove(buttonConditions.INACTIVE);
  buttonsContainer.addEventListener('click', (evt) => {
    const chosenFilterButton = evt.target.closest(buttonConditions.DEFAULT);
    if (!chosenFilterButton) {
      return;
    }
    disactivateButtons();
    chosenFilterButton.classList.add(buttonConditions.ACTIVE);
  });
};

const startFilration = (serverPhotos) => {
  buttonsContainer.addEventListener('click', debounce((evt) => {
    const chosenFilterButton = evt.target.closest(buttonConditions.DEFAULT);
    if (!chosenFilterButton) {
      return;
    }
    const filtratedPhotos = filterTypes[chosenFilterButton.id](serverPhotos);
    deletePictures();
    createMiniature(filtratedPhotos);
  }));
};

const createFilters = (serverPhotos) => {
  showFiltration();
  startFilration(serverPhotos);
};

export { createFilters };

