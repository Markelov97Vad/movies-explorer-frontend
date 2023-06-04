const iconsText = ['HTML', 'CSS', 'JS', 'React', 'Git', 'Express.js', 'mongoDB'];

const linksList = [{
  id: 1,
  text: 'Статичный сайт',
  link: 'https://s',
}, {
  id: 2,
  text: 'Адаптивный сайт',
  link: 'https://s'
}, {
  id: 3,
  text: 'Одностраничное приложение',
  link: 'https://s'
}];

// const moviesList = null // проверки загрузки карточек
const moviesList = [
  {
    id: 1,
    image: require('../images/pic-1.png'),
    nameRu: '33 слова о дизайне',
    duration: 107,
  }, {
    id: 2,
    image: require('../images/pic-2.png'),
    nameRu: 'Киноальманах «100 лет дизайна',
    duration: 63,
  }, {
    id: 3,
    image: require('../images/pic-3.png'),
    nameRu: 'В погоне за Бенкси',
    duration: 102,
   }, 
   {
    id: 4,
    image: require('../images/pic-4.png'),
    nameRu: 'Баския: Взрыв реальности',
    duration: 81,
  }, {
    id: 5,
    image: require('../images/pic-5.png'),
    nameRu: 'Бег это свобода',
    duration: 104,
  }, {
    id: 6,
    image: require('../images/pic-6.png'),
    nameRu: 'Книготорговцы',
    duration: 97,
  }, {
    id: 7,
    image: require('../images/pic-7.png'),
    nameRu: 'Когда я думаю о Германии ночью',
    duration: 116,
  }, {
    id: 8,
    image: require('../images/pic-8.png'),
    nameRu: 'Gimme Danger: История Игги и The Stooges sasas',
    duration: 119,
  }, {
    id: 9,
    image: require('../images/pic-9.png'),
    nameRu: 'Дженис: Маленькая девочка грустит',
    duration: 102,
  }, {
    id: 10,
    image: require('../images/pic-10.png'),
    nameRu: 'Соберись перед прыжком',
    duration: 70,
  }, {
    id: 11,
    image: require('../images/pic-11.png'),
    nameRu: 'Пи Джей Харви: A dog called money',
    duration: 64,
  }, {
    id: 12,
    image: require('../images/pic-12.png'),
    nameRu: 'По волнам: Искусство звука в кино',
    duration: 67,
  },
]

export { iconsText, linksList, moviesList };