import { Link } from "react-router-dom";
import './NavigationLink.css';

function NavigationLink({ place, text }) {
  return ( 
      <Link className={`navigation__link navigation__link_place_${place}`} to='/'>{text}</Link>
   );
}

export default NavigationLink;