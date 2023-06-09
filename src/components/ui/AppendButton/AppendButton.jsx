import './AppendButton.css'

function AppendButton({ onClick , text }) {
  return ( 
    <button className="append-button" onClick={onClick}>{text}</button>
   );
}

export default AppendButton;