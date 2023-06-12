import { Link } from 'react-router-dom';
import './NavigationLinkProfile.css';

function NavigationLinkProfile() {
  return ( 
    <Link to='/profile'
      className='navigation-link-profile'
      type='button'>Аккаунт</Link>
   );
}

export default NavigationLinkProfile;