import './AppendButton.css'

function AppendButton({ onClick , text }) {
  return ( 
    <button className="append-button" type='button' onClick={onClick}>{text}</button>
   );
}

export default AppendButton;