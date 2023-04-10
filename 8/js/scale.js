const SCALE_STEP = 25;
const MIN_RANGE = 25;
const MAX_RANGE = 100;

const buttonSmaller = document.querySelector('.scale__control--smaller');
const buttonBigger = document.querySelector('.scale__control--bigger');
const scaleController = document.querySelector('.scale__control--value');
const imgPreview = document.querySelector('.img-upload__preview img');

const resizeImage = (newValue) => {
  imgPreview.style.transform = `scale(${newValue * 0.01})`;
  scaleController.value = `${newValue}%`;
};

const onbuttonSmallerClick = () => {
  const currentValue = parseInt(scaleController.value, 10);
  let newValue = currentValue - SCALE_STEP;
  if (newValue < MIN_RANGE) {
    newValue = MIN_RANGE;
  }

  resizeImage(newValue);
};

const onbuttonBiggerClick = () => {
  const currentValue = parseInt(scaleController.value, 10);
  let newValue = currentValue + SCALE_STEP;
  if (newValue > MAX_RANGE) {
    newValue = MAX_RANGE;
  }

  resizeImage(newValue);
};

buttonSmaller.addEventListener('click', onbuttonSmallerClick);
buttonBigger.addEventListener('click', onbuttonBiggerClick);
