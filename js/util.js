// модуль с вспомогательными функциями


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

export {getRandomNumber, getRandomUniqueNumber, isEnterKey, isEscapeKey};
