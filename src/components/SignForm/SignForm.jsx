import './SignForm.css'
import InputForm from '../InputForm/InputForm';
import NavLinkSign from '../ui/NavLinkSign/NavLinkSign';
import FormButton from '../ui/FormButton/FormButton';
import { useLocation } from 'react-router-dom';
import useFormValid from '../../hooks/useFormValid';
import { useEffect } from 'react';
import { ERROR_MESSAGE_EMAIL, ERROR_MESSAGE_NAME, ERROR_MESSAGE_PASSWORD } from '../../utils/validation';
import { regexEmail, regexName, regexPassword } from '../../utils/validation';

function SignForm({ handleSubmit }) {
  const { pathname } = useLocation();
  const { values, handleChange, errorMessages, resetFormValues, formIsValid } = useFormValid({});

  useEffect(() => {
    resetFormValues();
  },[]);
  
  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(values);
  };

  return ( 
    <form className='sign-form' onSubmit={onSubmit}>
      <div className='sign-form__wrapper'>
        { pathname === '/signup' && 
        <InputForm 
          value={values.name} 
          onChange={handleChange} 
          isError={errorMessages.name} 
          errorMessage={ERROR_MESSAGE_NAME} 
          labelName='Имя' 
          typeWight='normal' 
          inputType='text' 
          name='name'
          pattern={regexName}
        />
        }
        <InputForm 
          value={values.email} 
          onChange={handleChange} 
          isError={errorMessages.email} 
          errorMessage={ERROR_MESSAGE_EMAIL} 
          labelName='E-mail' 
          typeWight='bold' 
          inputType='email' 
          name='email'
          pattern={regexEmail}
        />
        <InputForm 
          value={values.password} 
          onChange={handleChange} 
          isError={errorMessages.password} 
          errorMessage={ERROR_MESSAGE_PASSWORD} 
          labelName='Пароль' 
          typeWight='normal' 
          inputType='password' 
          name='password'
          pattern={regexPassword}
        />
      </div>
      <div className='sign-form__control-wrapper'>
        { pathname === '/signin' ? <FormButton text='Войти' isValid={formIsValid}/> : <FormButton text='Зарегистрироваться' isValid={formIsValid}/>}
        { pathname === '/signin' ? <span className='sign-form__span'>Ещё не зарегистрированы?<NavLinkSign text='Регистрация' to='/signup' place='sign' type='link' color='blue'/></span> 
        : <span className='sign-form__span'>Уже зарегистрированы?<NavLinkSign text='Войти' to='/signin' place='sign' type='link' color='blue'/></span>
        }
      </div>
    </form>
   );
}

export default SignForm;