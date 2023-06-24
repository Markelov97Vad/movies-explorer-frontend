import { useContext, useEffect, useRef, useState } from "react";
import "./Profile.css";
import Header from "../Header/Header";
import useFormValid from "../../hooks/useFormValid";
import FormButton from "../ui/FormButton/FormButton";
import NavLinkButton from "../ui/NavLinkButton/NavLinkButton";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { regexEmail, regexName } from "../../utils/validation";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { ERROR_MESSAGE_EMAIL, ERROR_MESSAGE_NAME, UNAUTHORIZED_ERROR_EMAIL_MESSAGE } from "../../utils/constants";

function Profile({ handleUserInfoChange, errorRequest , isEditing, handleOpenConfirm, message, onSignOut, isLoading }) {
  const [error, setError] = useState('');
  const inputRef = useRef(null);
  const { 
    values, 
    handleChange, 
    setValues, 
    formIsValid, 
    errorMessages 
  } = useFormValid({});
  const { currentUser } = useContext(CurrentUserContext);

  useEffect(() => {
    inputRef.current.focus();
  },[isEditing]);

  useEffect(() => {
    setValues({ name: currentUser.name, email: currentUser.email});
  }, []);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleUserInfoChange({ name: values.name, email: values.email })
  };

  const handleErrorMessage = () => {
    if (errorMessages.name) {
      setError(ERROR_MESSAGE_NAME)
    } else if(errorMessages.email) {
      setError(ERROR_MESSAGE_EMAIL)
    } else if (errorRequest) {
      setError(UNAUTHORIZED_ERROR_EMAIL_MESSAGE)
    } else {
      setError('')
    }
  }
  useEffect(() => {
    handleErrorMessage()
  },[error, values, handleChange])

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
                  value={values.name || ""}
                  type="text"
                  id="name"
                  onChange={handleChange}
                  disabled={isEditing ? false : true}
                  minLength={2}
                  maxLength={30}
                  pattern={regexName}
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
                  value={values.email || ""}
                  type="email"
                  id="email"
                  onChange={handleChange}
                  disabled={isEditing ? false : true}
                  required
                  pattern={regexEmail}
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
                <FormButton text="Сохранить" isValid={formIsValid} isLoading={isLoading}/>
              </div>
            )}
          </form>
        </section>
      </main>
    </>
  );
}

export default Profile;
