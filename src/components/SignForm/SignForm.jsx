import './SignForm.css'
import InputForm from '../InputForm/InputForm';
import NavLinkSign from '../ui/NavLinkSign/NavLinkSign';
import FormButton from '../ui/FormButton/FormButton';
import { useLocation } from 'react-router-dom';
import useFormValid from '../../hooks/useFormValid';
import { useEffect } from 'react';
import { ERROR_MESSAGE_EMAIL } from '../../utils/validation';

function SignForm() {
  const { pathname } = useLocation();
  const { values, handleChange, errorMessages, resetFormValues, formIsValid } = useFormValid({});

  useEffect(() => {
    resetFormValues();
  },[]);

  return ( 
    <form className='sign-form'>
      <div className='sign-form__wrapper'>
        { pathname === '/signup' && <InputForm value={values.name} onChange={handleChange} errorMessage={errorMessages.name} labelName='Имя' typeWight='normal' inputType='text' name='name'/>}
        <InputForm value={values.email} onChange={handleChange} isError={errorMessages.email} errorMessage={ERROR_MESSAGE_EMAIL} labelName='E-mail' typeWight='bold' inputType='email' name='email'/>
        <InputForm value={values.password} onChange={handleChange} isError={errorMessages.password} errorMessage={errorMessages.password} labelName='Пароль' typeWight='normal' inputType='password' name='password'/>
      </div>
      <div className='sign-form__control-wrapper'>
        { pathname === '/signin' ? <FormButton text='Войти' isValid={formIsValid}/> : <FormButton text='Регистрация' isValid={formIsValid}/>}
        { pathname === '/signin' ? <span className='sign-form__span'>Ещё не зарегистрированы?<NavLinkSign text='Регистрация' to='/signup' place='sign' type='link' color='blue'/></span> 
        : <span className='sign-form__span'>Уже зарегистрированы?<NavLinkSign text='Войти' to='/signup' place='sign' type='link' color='blue'/></span>
        }
      </div>
    </form>
   );
}

export default SignForm;