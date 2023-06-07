import './FormButton.css';

function FormButton({ text, isValid = true }) {
  return ( 
    <button type='submit' className='form-button' disabled={!isValid}>{text}</button>
   );
}

export default FormButton;