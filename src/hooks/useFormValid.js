import { useCallback, useState } from "react";

function useFormValid(inputValues) {
  const [values, setValues] = useState(inputValues);
  const [errorMessages, setErrorMessages] = useState({});
  const [formIsValid, setFormIsValid] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const isValid = event.target.closest('form').checkValidity();

    setValues({...values, [name]: value});
    setErrorMessages({...errorMessages, [name]: event.target.validationMessage});
    setFormIsValid(isValid);
  }

  const resetFormValues = useCallback((newValues = {}, newError = {}, newIsValid = false) => {
    setValues(newValues);
    setErrorMessages(newError);
    setFormIsValid(newIsValid);
  }, [setValues, setErrorMessages, setFormIsValid]);

  return { values, handleChange, setValues, formIsValid, errorMessages, resetFormValues }
}

export default useFormValid;