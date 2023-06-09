import './ButtonCross.css';

function ButtonCross({ onClick, place }) {
  return ( 
    <button onClick={onClick} type='button' className={`button-cross button-cross_place_${place}`}></button>
   );
}

export default ButtonCross;