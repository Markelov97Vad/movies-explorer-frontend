import './ButtonCross.css';

function ButtonCross({ handleClick, place }) {
  return ( 
    <button onClick={handleClick} type='button' className={`button-cross button-cross_place_${place}`}></button>
   );
}

export default ButtonCross;