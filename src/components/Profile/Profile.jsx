import { useContext, useEffect, useRef, useState } from "react";
import "./Profile.css";
import Header from "../Header/Header";
import useFormValid from "../../hooks/useFormValid";
import FormButton from "../ui/FormButton/FormButton";
import NavLinkButton from "../ui/NavLinkButton/NavLinkButton";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { UNAUTHORIZED_ERROR_EMAIL_MESSAGE } from "../../utils/constants";

function Profile({ handleUserInfoChange, errorRequest , isEditing, handleOpenConfirm, message, onSignOut, isLoading }) {
  const [error, setError] = useState('');
  const inputRef = useRef(null);
  const { 
    inputValues, 
    handleInputChange,  
    formIsValid, 
    errorMessages,
    resetFormValues
  } = useFormValid();
  const { currentUser } = useContext(CurrentUserContext);

  useEffect(() => {
    inputRef.current.focus();
  },[isEditing]);

  useEffect(() => {
    resetFormValues(currentUser);
  },[])

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleUserInfoChange({ name: inputValues.name, email: inputValues.email })
  };

  const handleErrorMessage = () => {
    if (errorMessages.name) {
      setError(errorMessages.name)
    } else if(errorMessages.email) {
      setError(errorMessages.email)
    } else if (errorRequest) {
      setError(UNAUTHORIZED_ERROR_EMAIL_MESSAGE)
    } else {
      setError('')
    }
  }
  useEffect(() => {
    handleErrorMessage()
  },[error, inputValues, handleInputChange])

  const isSubmitButtonDisabled = (!formIsValid || (currentUser.name === inputValues.name && currentUser.email === inputValues.email));

  return (
    <>
      <Header />
      <main className="profile">
        <section className="profile__info">
          <h1 className="profile__title">Привет, Вадим!</h1>
          <form
            className="profile__form"
            onSubmit={handleSubmit}
            name="profile"
            noValidate
          >
            <fieldset className="profile__fieldest">
              <div className="profile__input-wrapper">
                <label className="profile__input-label" htmlFor="name">
                  Имя
                </label>
                <input
                  ref={inputRef}
                  className="profile__input"
                  name="name"
                  value={inputValues.name || ""}
                  type="text"
                  id="name"
                  onChange={(evt) => handleInputChange(evt, { customValidation: true })}
                  disabled={isEditing ? false : true}
                  minLength={2}
                  maxLength={30}
                  required
                />
              </div>
              <div className="profile__input-wrapper">
                <label className="profile__input-label" htmlFor="email">
                  E-mail
                </label>
                <input
                  className="profile__input"
                  name="email"
                  value={inputValues.email || ""}
                  type="email"
                  id="email"
                  onChange={(evt) => handleInputChange(evt, { customValidation: true })}
                  disabled={isEditing ? false : true}
                  required
                />
              </div>
            </fieldset>
            {!isEditing ? (
              <div className="profile__edit">
                <span className="profile__success-span">{message}</span>
                <button
                  onClick={handleOpenConfirm}
                  type="button"
                  className="profile__button"
                >
                  Редактировать
                </button>
                <NavLinkButton
                  link="/signin"
                  text="Выйти из аккаунта"
                  place="profile"
                  type="link"
                  color="red"
                  onSignOut={onSignOut}
                />
              </div>
            ) : (
              <div className="profile__submit">
                {error.length > 0 && <ErrorMessage text={error} place='profile'/>}
                <FormButton 
                  text="Сохранить" 
                  disabled={isSubmitButtonDisabled}
                  isLoading={isLoading}
                  />
              </div>
            )}
          </form>
        </section>
      </main>
    </>
  );
}

export default Profile;
