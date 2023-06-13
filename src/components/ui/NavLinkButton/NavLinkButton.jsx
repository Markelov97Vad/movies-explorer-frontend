import { useNavigate } from "react-router-dom";
import './NavLinkButton.css'

function NavLinkButton({ text , place, type, link, color }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`${link}`, {replace: true})
  }

  return ( 
    <button onClick={handleClick} type='button' className={
      `navigation-link-sign__button navigation-link-sign__button_place_${place} navigation-link-sign__button_type_${type} navigation-link-sign__button_color_${color}`
    }>
      {text}
    </button>
    // <button to={to} type="button" className={`navigation-link-sign__button navigation-link-sign__button_place_${place} navigation-link-sign__button_type_${type} navigation-link-sign__button_color_${color}`} >
    //   </button>
   );
}

export default NavLinkButton;