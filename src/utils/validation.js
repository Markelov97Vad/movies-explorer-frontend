const ERROR_MESSAGE_EMAIL = 'Ввидите адрес электронной почты';
const ERROR_MESSAGE_NAME = 'Имя должно быть от 2 до 30 символов';
const ERROR_MESSAGE_PASSWORD = 'Пароль должен содержать буквы и цыфры'
const regexName = "[A-я-\\s]{2,30}";
// const regexEmail = "^[-\\w.]+@([A-z0-9][-A-z0-9]+.)+[A-z]{2,4}$";
const regexEmail = "^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$";
const regexPassword = "(?=.*[A-z])(?=.*\\d)(?=.)(?=.{1,}).*";

export {
  ERROR_MESSAGE_EMAIL,
  ERROR_MESSAGE_NAME,
  ERROR_MESSAGE_PASSWORD,
  regexName,
  regexEmail,
  regexPassword,
}