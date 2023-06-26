import './ButtonLike.css'

function ButtonLike({ isOwner, handleClick}) {

  const cardLikeButtonClassname = `button-like ${isOwner? 'button-like_active' : ''}`

  return ( 
    <button className={cardLikeButtonClassname} onClick={handleClick} type='button'></button>
   );
}

export default ButtonLike;