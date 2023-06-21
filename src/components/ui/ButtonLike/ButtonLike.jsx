import { useState } from 'react';
import './ButtonLike.css'

function ButtonLike({ handleSave, handleDelete, isOwner, handleClick, className}) {
  const [ isLiked, setIsLiked] = useState(false);

  const cardLikeButtonClassname = `button-like ${isOwner? 'button-like_active' : ''}`

  // console.log('class' ,className );
  // const handleLike = () => {
  //   setIsLiked(!isLiked);
  //   if(!isOwner) {
  //     handleSave();
  //   } else {
  //     handleDelete();
  //   }
  // }

  return ( 
    <button className={cardLikeButtonClassname} onClick={handleClick} type='button'></button>
   );
}

export default ButtonLike;