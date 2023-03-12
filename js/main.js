const AUTHOR_NAME = [
  'Антон',
  'Гвидон',
  'Андрей',
  'Катерина',
  'Бусинка',
  'Анджелина',
  'Брэд'
];

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const DESCRIPTION_PHOTO = [
  'Лучше и быть не может',
  'Какое голубое небо, вы такого никогда не видели',
  'Снимаю салют. Это всем очень интересно',
  'Купила кота',
  'Кто не поставит лайк, тот гриб',
  'Ауф',
  'Сегодня был на съезде молодых ученых',
  'Это мы с друзьями пьем пиво',
  'Читайте больше книг, это затягивает',
  'Поплавушки',
  'Толстый кот',
  'Ура я еду жить в Грузию',
  'Изучаю программирование. А хотелось бы тарелку супа',
  'Выступаю на встрече рос.мола. Вперед, молодежь!',
  'Финансовая грамотность это не мое',
  'Готовлюсь ко вступительным экзаменам в Плешку, пожелайте удачи',
  'В спорт зале наконец-то мало людей',
  'Снег бесит. Когда там уже будет весна?',
  'Сегодня кот похудел, горжусь им',
  'Посмотрела сериал Белый лотос. Рекомендую',
  'Окей гугл, что в голове у волнистого попугая',
  'Жизнь такое спортлото, полюбила да не то',
  'Время затянуть пояса',
  'Здорово жить, жить так здорово',
  'Это мог быть последний пост, но описания будут выдаваться рандомно'
];

const NUMBER_OF_OBJECT = 25;
const NUMBER_OF_COMMENTS = 5;


function getRandomNumber (a, b) {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function getRandomUniqueNumber (a, b) {
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
}

const CREATE_COMMENT = () => ({
  id: getRandomUniqueNumber(1, 999999),
  avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
  message: MESSAGE[getRandomUniqueNumber(0, 5)],
  name: AUTHOR_NAME[getRandomNumber(0, 6)],
});


const CREATE_OBJECT = () => ({
  id: getRandomUniqueNumber(1, 25),
  url: `photos/${getRandomUniqueNumber(1, 25)}.jpg`,
  description: DESCRIPTION_PHOTO[getRandomUniqueNumber(0, 24)],
  likes: getRandomNumber(15, 200),
  comments: Array.from({ length: NUMBER_OF_COMMENTS }, CREATE_COMMENT),
});

const generateObjects = () => Array.from({ length: NUMBER_OF_OBJECT }, CREATE_OBJECT);
generateObjects();
