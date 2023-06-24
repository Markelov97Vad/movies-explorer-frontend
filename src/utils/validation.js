// const regexName = '[A-я-\s]{2,30}';
const regexName = "^[A-я]{2,30}";
const regexEmail = "\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$/";
const regexPassword = "(?=.*[A-z])(?=.*\\d)(?=.)(?=.{1,}).*";

export {
  regexName,
  regexEmail,
  regexPassword,
}