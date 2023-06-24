import { MOVIES_BASE_API_URL } from "./constants";

const iconsText = ['HTML', 'CSS', 'JS', 'React', 'Git', 'Express.js', 'mongoDB'];
const linksResources = {
  github: 'https://github.com/Markelov97Vad',
  yandexPracticum: 'https://practicum.yandex.ru/',
}
const linksList = [{
  id: 1,
  text: 'Статичный сайт',
  link: 'https://markelov97vad.github.io/how-to-learn/',
}, {
  id: 2,
  text: 'Адаптивный сайт',
  link: 'https://markelov97vad.github.io/russian-travel/'
}, {
  id: 3,
  text: 'Одностраничное приложение',
  link: 'https://mesto.marsello.nomoredomains.monster/'
}];

const loadingMessage = { 
  signup: 'Регистрация..', 
  signin: 'Вход..' ,
  profile: 'Сохранение..'
};

function handleMovieDataFormat({ nameRU, nameEN, country, director, duration, year, image, id, description, trailerLink }) {
  return {
      nameRU,
      nameEN,
      description,
      country,
      director,
      duration,
      year,
      trailerLink,
      image:  MOVIES_BASE_API_URL + image.url,
      thumbnail:  MOVIES_BASE_API_URL + image.formats.thumbnail.url,
      movieId: id,
  };
}

export { 
  iconsText,
  linksResources,
  linksList, 
  handleMovieDataFormat,
  loadingMessage
};