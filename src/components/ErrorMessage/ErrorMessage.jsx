import './ErrorMessage.css'

function ErrorMessage({ text }) {
  return ( 
    <span className="error-message">{text}</span>
   );
}

export default ErrorMessage;