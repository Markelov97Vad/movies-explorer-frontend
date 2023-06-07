import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import './Profile.css'
import FormButton from '../ui/FormButton/FormButton';

function Profile() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const handleChangeName = (e) => {
    setName(e.target.value);
  }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  }

  const handleEditing = () => {
    setIsEditing(true)
  }

  useEffect(() => {
    setName('Вадим');
    setEmail('test@email.com')
  },[])

  return ( 
    <>
      <Header />
      <main className='profile'>
        <h3 className='profile__title'>Привет, Вадим!</h3>
        <form className='profile-form'>
          <fieldset className='profile-form__fieldest'>
            <div className='profile-form__input-wrapper'>
              <label className='profile-form__input-label' htmlFor="name">Имя</label>
              <input className='profile-form__input' type="text" id='name' value={name} onChange={handleChangeName} disabled={isEditing ? false : true}/>
            </div>
            <div className='profile-form__input-wrapper'>
              <label className='profile-form__input-label' htmlFor="email">E-mail</label>
              <input className='profile-form__input' type="email" id='email' value={email} onChange={handleChangeEmail} disabled={isEditing ? false : true}/>
            </div>
          </fieldset>
          {
            !isEditing ? 
              <div className='profile-form__edit'>
                <button onClick={handleEditing} type='button' className='profile-form__button profile-form__button_type_edit'>Редактировать</button>
                <button type='button' className='profile-form__button profile-form__button_type_logout'>Выйти из аккаунта</button>
              </div> :
              <div className='profile-form__submit'>
                <span className='profile-form__error'>При обновлении профиля произошла ошибка.</span>
                <FormButton text='Сохранить'/>
              </div>
          }
        </form>
      </main>
    </> 
  );
}

export default Profile;