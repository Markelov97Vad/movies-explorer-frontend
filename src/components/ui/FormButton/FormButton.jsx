import './FormButton.css';

function FormButton({ text, isValid }) {
  const handleClick = () => {
    console.log('click');
  }
  return ( 
    <button onClick={handleClick} type='submit' className='form-button' disabled={!isValid}>{text}</button>
   );
}

export default FormButton;