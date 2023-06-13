import { useEffect, useState } from "react";
import "./Profile.css";
import Header from "../Header/Header";
import useFormValid from "../../hooks/useFormValid";
import FormButton from "../ui/FormButton/FormButton";
import NavLinkButton from "../ui/NavLinkButton/NavLinkButton";

function Profile() {
  const { values, handleChange, setValues, formIsValid } = useFormValid({});
  const [isEditing, setIsEditing] = useState(false);

  const handleEditing = () => {
    setIsEditing(true);
  };

  useEffect(() => {
    setValues({ name: "Вадим", email: "test@email.com" });
  }, []);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setValues({ name: values.name, email: values.email });
    setIsEditing(false);
  };

  return (
    <>
      <Header />
      <main className="profile">
        <section className="profile__info">
          <h1 className="profile__title">Привет, Вадим!</h1>
          <form className="profile__form" onSubmit={handleSubmit} name="profile" noValidate>
            <fieldset className="profile__fieldest">
              <div className="profile__input-wrapper">
                <label className="profile__input-label" htmlFor="name">
                  Имя
                </label>
                <input
                  className="profile__input"
                  name="name"
                  value={values.name || ""}
                  type="text"
                  id="name"
                  onChange={handleChange}
                  disabled={isEditing ? false : true}
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
                />
              </div>
            </fieldset>
            {!isEditing ? (
              <div className="profile__edit">
                <button
                  onClick={handleEditing}
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
                />
              </div>
            ) : (
              <div className="profile__submit">
                <span className="profile__error profile__error_active">
                  При обновлении профиля произошла ошибка.
                </span>
                <FormButton text="Сохранить" isValid={formIsValid} />
              </div>
            )}
          </form>
        </section>
      </main>
    </>
  );
}

export default Profile;
