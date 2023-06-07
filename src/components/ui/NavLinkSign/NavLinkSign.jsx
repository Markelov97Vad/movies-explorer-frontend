import { Link } from "react-router-dom";
import './NavLinkSign.css'

function NavLinkSign({ text , place, type, to, color }) {
  return ( 
    <Link 
    to={to} 
    className={
      `navigation-link-sign navigation-link-sign_place_${place} navigation-link-sign_type_${type} navigation-link-sign_color_${color}`
    }>
      {text}
    </Link>
   );
}

export default NavLinkSign;