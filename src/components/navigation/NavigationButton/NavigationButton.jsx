import { Link } from 'react-router-dom';
import './NavigationButton.css';

function NavigationButton({ place }) {
  return ( 
    <Link to='/profile'>
      <button 
        className={
            `navigation-button ${place && `navigation-button_place_${place}`}`
          } 
        type='button'>Аккаунт</button>
    </Link>
   );
}

export default NavigationButton;