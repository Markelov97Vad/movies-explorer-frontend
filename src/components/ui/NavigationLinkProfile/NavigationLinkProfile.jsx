import { Link } from 'react-router-dom';
import './NavigationLinkProfile.css';

function NavigationLinkProfile({ place }) {
  return ( 
    <Link to='/profile'
      className={
          `navigation-link-profile ${place && `navigation-link-profile_place_${place}`}`
        } 
      type='button'>Аккаунт</Link>
   );
}

export default NavigationLinkProfile;