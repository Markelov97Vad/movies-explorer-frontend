import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import './Profile.css';
import useFormValid from '../../hooks/useFormValid';
import FormButton from '../ui/FormButton/FormButton';
import NavLinkSign from '../ui/NavLinkSign/NavLinkSign';

function Profile() {
  const { values, handleChange, setValues, formIsValid } = useFormValid({});
  const [isEditing, setIsEditing] = useState(false);

  const handleEditing = () => {
    setIsEditing(true)
  }

  useEffect(() => {
    setValues({ name: 'Вадим', email: 'test@email.com'})
  },[])

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setValues({ name: values.name, email: values.email})
    setIsEditing(false)
  }

  return ( 
    <>
      <Header />
      <main className='profile'>
        <h3 className='profile__title'>Привет, Вадим!</h3>
        <form className='profile-form' onSubmit={handleSubmit}>
          <fieldset className='profile-form__fieldest'>
            <div className='profile-form__input-wrapper'>
              <label className='profile-form__input-label' htmlFor="name">Имя</label>
              <input className='profile-form__input' name='name' value={values.name || ''} type="text" id='name' onChange={handleChange} disabled={isEditing ? false : true} required/>
            </div>
            <div className='profile-form__input-wrapper'>
              <label className='profile-form__input-label' htmlFor="email">E-mail</label>
              <input className='profile-form__input' name='email' value={values.email || ''} type="email" id='email' onChange={handleChange} disabled={isEditing ? false : true} required/>
            </div>
          </fieldset>
          {
            !isEditing ? 
              <div className='profile-form__edit'>
                <button onClick={handleEditing} type='button' className='profile-form__button'>Редактировать</button>
                <NavLinkSign to='/signin' text='Выйти из аккаунта' place='profile' type='link' color='red'/>
              </div> :
              <div className='profile-form__submit'>
                <span className='profile-form__error profile-form__error_active'>При обновлении профиля произошла ошибка.</span>
                <FormButton text='Сохранить' isValid={formIsValid}/>
              </div>
          }
        </form>
      </main>
    </> 
  );
}

export default Profile;