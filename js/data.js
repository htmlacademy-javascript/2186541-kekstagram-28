import {getRandomNumber, getRandomUniqueNumber} from './util.js';

const AUTHOR_NAMES = [
  'Антон',
  'Гвидон',
  'Андрей',
  'Катерина',
  'Бусинка',
  'Анджелина',
  'Брэд'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Ну и фотография',
  'Какая красота',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const DESCRIPTION_PHOTOS = [
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
const NUMBER_OF_COMMENTS = 7;

const getRandomUniqueNumberForComments = getRandomUniqueNumber(1, 99999);
getRandomUniqueNumberForComments();

const getRandomUniqueNumberForObjects = getRandomUniqueNumber(1, 25);

const getRandomUniqueNumberForDescription = getRandomUniqueNumber(0, 25);
getRandomUniqueNumberForDescription();

const createComment = () => ({
  id: getRandomUniqueNumberForComments(),
  avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
  message: MESSAGES[getRandomNumber(0, 5)],
  name: AUTHOR_NAMES[getRandomNumber(0, 6)],
});

const createObject = () => {
  const uniqueNumberForObjects = getRandomUniqueNumberForObjects();
  return {
    id: uniqueNumberForObjects,
    url: `photos/${uniqueNumberForObjects}.jpg`,
    description: DESCRIPTION_PHOTOS[getRandomUniqueNumberForDescription()],
    likes: getRandomNumber(15, 200),
    comments: Array.from({ length: NUMBER_OF_COMMENTS }, createComment),
  };
};

const generateObjects = () => Array.from({ length: NUMBER_OF_OBJECT }, createObject);
const exit = generateObjects();

export {exit, generateObjects, createComment};
