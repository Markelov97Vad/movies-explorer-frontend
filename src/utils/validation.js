const validationConfig = {
  name: {
      pattern: /^[a-zA-Zа-яА-ЯёЁ-]+[a-zA-Zа-яА-ЯёЁ -]*$/,
      validationError: 'Имя может содержать только буквы, пробел или дефис',
      emptyError: 'Заполните это поле.',
  },
  email: {
      pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      validationError: 'Email введен некорректно',
      emptyError: 'Заполните это поле.',
  }
}

export {
  validationConfig
}