// модуль с вспомогательными функциями
const ALERT_SHOW_TIME = 5000;
const DELAY_TIME = 500;

const getRandomNumber = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomUniqueNumber = (a, b) => {
  const usedNumbers = [];

  return function () {
    let currentValue = getRandomNumber(a, b);
    if (usedNumbers.length >= (b - a + 1)) {
      return 'Перебраны все числа из диапазона';
    }
    while (usedNumbers.includes(currentValue)) {
      currentValue = getRandomNumber(a, b);
    }
    usedNumbers.push(currentValue);
    return currentValue;
  };
};

const isEnterKey = (evt) => evt.key === 'Enter';
const isEscapeKey = (evt) => evt.key === 'Escape';

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '30px 30px';
  alertContainer.style.fontSize = '14px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const debounce = (callback, timeoutDelay = DELAY_TIME) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export { getRandomNumber, getRandomUniqueNumber, isEnterKey, isEscapeKey, showAlert, debounce };
