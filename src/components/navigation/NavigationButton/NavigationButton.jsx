import './NavigationButton.css';

function NavigationButton({ place }) {
  return ( 
    <>
      <button 
        className={
            `navigation-button ${place && `navigation-button_place_${place}`}`
          } 
        type='button'>Аккаунт</button>
    </>
   );
}

export default NavigationButton;