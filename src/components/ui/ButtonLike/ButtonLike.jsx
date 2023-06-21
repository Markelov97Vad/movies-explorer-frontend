import { useState } from 'react';
import './ButtonLike.css'

function ButtonLike({ handleSave, handleDelete, isOwner }) {
  const [ isLiked, setIsLiked] = useState(false);

  const cardLikeButtonClassname = `button-like ${isOwner ? 'button-like_active' : ''}`

  const handleLike = () => {
    setIsLiked(!isLiked);
    if(!isOwner) {
      handleSave();
    } else {
      handleDelete();
    }
  }

  return ( 
    <button className={cardLikeButtonClassname} onClick={handleLike} type='button'></button>
   );
}

export default ButtonLike;