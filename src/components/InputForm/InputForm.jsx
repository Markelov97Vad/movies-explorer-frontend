import './InputForm.css';

function InputForm({ labelName, inputType, typeWight}) {
  return ( 
    <div className='form-input'>
      <label className='form-input__label' htmlFor="email">{labelName}</label>
      <input className={`form-input__input form-input__input_type_${typeWight}`} type={inputType} name={inputType} id={inputType} autoComplete={`new-${inputType}`} />
      <span className='form-input__error form-input__error_active'>что-то пошло не так</span>
    </div>
   );
}

export default InputForm;