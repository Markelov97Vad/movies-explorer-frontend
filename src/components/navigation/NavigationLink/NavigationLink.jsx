import { Link } from "react-router-dom";
import './NavigationLink.css';

function NavigationLink({ place, text, path }) {
  return ( 
      <Link to={path} className={`navigation-link navigation-link_place_${place}`}>{text}</Link>
   );
}

export default NavigationLink;