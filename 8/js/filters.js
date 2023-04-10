// фильтры-эффекты для фото
const MIN_VALUE = 0;
const MAX_VALUE = 100;
const radioButtons = document.querySelector('.effects__list');
const imgPreview = document.querySelector('.img-upload__preview img');
const effectLevelSlider = document.querySelector('.effect-level__slider');
const effectValue = document.querySelector('.effect-level__value');
const sliderContainer = document.querySelector('.effect-level');

noUiSlider.create(effectLevelSlider, {
  range: {
    min: MIN_VALUE,
    max: MAX_VALUE,
  },
  start: MAX_VALUE,
  connect: 'lower'
});

const filterVariants = [
  {
    name: 'none',
    range: {
      min: 0,
      max: 100
    },
    start: 100,
    step: 0.1
  },
  {
    name: 'chrome',
    filter: 'grayscale',
    type: '',
    range: {
      min: 0,
      max: 1
    },
    start: 1,
    step: 0.1
  },

  {
    name: 'sepia',
    filter: 'sepia',
    type: '',
    range: {
      min: 0,
      max: 1
    },
    start: 1,
    step: 0.1
  },

  {
    name: 'marvin',
    filter: 'invert',
    type: '%',
    range: {
      min: 0,
      max: 100
    },
    start: 100,
    step: 1
  },

  {
    name: 'phobos',
    filter: 'blur',
    type: 'px',
    range: {
      min: 0,
      max: 3
    },
    start: 3,
    step: 0.1
  },

  {
    name: 'heat',
    filter: 'brightness',
    type: '',
    range: {
      min: 0,
      max: 3
    },
    start: 3,
    step: 0.1
  }
];

const DEFAULT_EFFECT = filterVariants[0];
let chosenEffect = DEFAULT_EFFECT;

const removeSlider = () => {
  effectLevelSlider.noUiSlider.updateOptions({
    name: 'none',
    range: {
      min: 0,
      max: 100
    },
    start: 100,
    step: 0.1
  });
};

const updateSlider = () => {
  effectLevelSlider.noUiSlider.updateOptions({
    range: chosenEffect.range,
    start: chosenEffect.start,
    step: chosenEffect.step
  });
  if (chosenEffect.name === 'none') {
    sliderContainer.classList.add('hidden');
    imgPreview.style.filter = '';
  }
};

const changeFilter = (evt) => {
  sliderContainer.classList.remove('hidden');
  imgPreview.classList = '';
  if (!evt.target.classList.contains('effects__radio')) {
    return;
  }
  chosenEffect = filterVariants.find((filterVariant) => filterVariant.name === evt.target.value);
  imgPreview.classList.add(`effects__preview--${chosenEffect.name}`);
  updateSlider();
};

const onSliderUpdate = () => {
  imgPreview.style.filter = '';
  effectValue.value = effectLevelSlider.noUiSlider.get();
  imgPreview.style.filter = `${chosenEffect.filter}(${effectValue.value}${chosenEffect.type})`;
};

radioButtons.addEventListener('change', changeFilter);
effectLevelSlider.noUiSlider.on('update', onSliderUpdate);

export {removeSlider};
