import { useState } from 'react';
import './ButtonLike.css'

function ButtonLike() {
  const [ isLiked, setIsLiked] = useState(false);

  const cardLikeButtonClassname = `button-like ${isLiked ? 'button-like_active' : ''}`

  const handleLike = () => {
    setIsLiked(!isLiked);
  }

  return ( 
    <button className={cardLikeButtonClassname} onClick={handleLike} type='button'></button>
   );
}

export default ButtonLike;