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
    range: {
      min: 0,
      max: 1
    },
    start: 1,
    step: 0.1
  },

  {
    name: 'sepia',
    range: {
      min: 0,
      max: 1
    },
    start: 1,
    step: 0.1
  },

  {
    name: 'marvin',
    range: {
      min: 0,
      max: 100
    },
    start: 100,
    step: 1
  },

  {
    name: 'phobos',
    range: {
      min: 0,
      max: 3
    },
    start: 3,
    step: 0.1
  },

  {
    name: 'heat',
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

const updateSlider = () => {
  effectLevelSlider.noUiSlider.updateOptions({
    range: chosenEffect.range,
    start: chosenEffect.start,
    step: chosenEffect.step
  });
  if (chosenEffect.name === 'none') {
    sliderContainer.classList.add('hidden');
    effectLevelSlider.noUiSlider.off();
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

const filterValue = {
  chrome: `grayscale(${effectValue.value})`,
  sepia: `sepia(${effectValue.value})`,
  marvin: `invert(${effectValue.value}%)`,
  phobos: `blur(${effectValue.value}px)`,
  heat: `brightness(${effectValue.value})`
};

const onSliderUpdate = () => {
  effectValue.value = effectLevelSlider.noUiSlider.get();
  imgPreview.style.filter = filterValue[chosenEffect.name];
};

radioButtons.addEventListener('change', changeFilter);
effectLevelSlider.noUiSlider.on('update', onSliderUpdate);
