import { Link } from 'react-router-dom';
import './SignForm.css'
import InputForm from '../InputForm/InputForm';

function SignForm() {
  return ( 
    <form className='sign-form'>
      <div className='sign-form__wrapper'>
        <InputForm labelName='E-mail' typeWight='bold' inputType='email'/>
        <InputForm labelName='Пароль' typeWight='normal' inputType='password'/>
      </div>
      <div className='sign-form__control-wrapper'>
        <button type='submit' className='button button_place_profile position'>Войти</button>
        <span className='sign-form__span'>Уже зарегистрированы?<Link className='sign-form__link' to='/signup'>Регистрация</Link></span>
      </div>
    </form>
   );
}

export default SignForm;