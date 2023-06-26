import "./SignForm.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import InputForm from "../ui/InputForm/InputForm";
import NavLinkSign from "../ui/NavLinkButton/NavLinkButton";
import FormButton from "../ui/FormButton/FormButton";
import useFormValid from "../../hooks/useFormValid";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

function SignForm({ handleSubmit, nameForm, message, isLoading }) {
  const { pathname } = useLocation();
  const { 
    inputValues, 
    handleInputChange, 
    errorMessages, 
    resetFormValues, 
    formIsValid 
  } = useFormValid();

  useEffect(() => {
    resetFormValues();
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log('INPUT VALUES', inputValues);
    handleSubmit(inputValues);
  };

  return (
    <form className="sign-form" onSubmit={onSubmit} name={nameForm} disabled={!formIsValid || isLoading} noValidate>
      <div className="sign-form__wrapper">
        {pathname === "/signup" && (
          <InputForm
            value={inputValues.name}
            onChange={(evt) => handleInputChange(evt, { customValidation: true })}
            isError={errorMessages.name}
            errorMessage={errorMessages.name}
            labelName="Имя"
            typeWight="normal"
            inputType="text"
            name="name"
            autoComplete='on'
          />
        )}
        <InputForm
          value={inputValues.email}
          onChange={(evt) => handleInputChange(evt, { customValidation: true })}
          isError={errorMessages.email}
          errorMessage={errorMessages.email}
          labelName="E-mail"
          typeWight="bold"
          inputType="email"
          name="email"
          autoComplete='on'
          required
        />
        <InputForm
          value={inputValues.password}
          onChange={handleInputChange}
          isError={errorMessages.password}
          errorMessage={errorMessages.password}
          labelName="Пароль"
          typeWight="normal"
          inputType="password"
          name="password"
          autoComplete='current-password'
          required
        />
      </div>
      <div className="sign-form__control-wrapper">
        <ErrorMessage text={message} place='sign-form'/>
        {pathname === "/signin" ? (
          <FormButton text="Войти" disabled={!formIsValid} isLoading={isLoading}/>
        ) : (
          <FormButton text="Зарегистрироваться" disabled={!formIsValid} isLoading={isLoading}/>
        )}
        {pathname === "/signin" ? (
          <span className="sign-form__span">
            Ещё не зарегистрированы?
            <NavLinkSign
              text="Регистрация"
              link="/signup"
              place="sign"
              type="link"
              color="blue"
            />
          </span>
        ) : (
          <span className="sign-form__span">
            Уже зарегистрированы?
            <NavLinkSign
              text="Войти"
              link="/signin"
              place="sign"
              type="link"
              color="blue"
            />
          </span>
        )}
      </div>
    </form>
  );
}

export default SignForm;
