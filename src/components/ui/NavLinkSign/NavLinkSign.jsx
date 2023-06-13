import { Link } from "react-router-dom";
import './NavLinkSign.css'

function NavLinkSign({ text , place, type, to, color }) {
  return ( 
    <Link 
    to={to}
    className="navigation-link-sign"
    >
      <button type='button' className={
      `navigation-link-sign__button navigation-link-sign__button_place_${place} navigation-link-sign__button_type_${type} navigation-link-sign__button_color_${color}`
    } >{text}</button>
    </Link>
   );
}

export default NavLinkSign;