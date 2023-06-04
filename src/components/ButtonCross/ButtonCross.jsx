import './ButtonCross.css';

function ButtonCross({ place }) {
  return ( 
    <button className={`button-cross button-cross_place_${place}`}></button>
   );
}

export default ButtonCross;