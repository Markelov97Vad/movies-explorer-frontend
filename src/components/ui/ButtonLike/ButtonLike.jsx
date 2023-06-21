import { useState } from 'react';
import './ButtonLike.css'

function ButtonLike({ handleClick }) {
  const [ isLiked, setIsLiked] = useState(false);

  const cardLikeButtonClassname = `button-like ${isLiked ? 'button-like_active' : ''}`

  const handleLike = () => {
    setIsLiked(!isLiked);
    handleClick();
  }

  return ( 
    <button className={cardLikeButtonClassname} onClick={handleLike} type='button'></button>
   );
}

export default ButtonLike;