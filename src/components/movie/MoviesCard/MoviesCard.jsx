import './MoviesCard.css';
import pic from '../../../images/test-pic.jpg'

function MoviesCard() {
  return ( 
    <article className='movie-card'>
      <img className='movie-card__image' src={pic} alt="" />
      <div className='movie-card__wrapper'>
        <h4 className='movie-card__title'>text</h4>
        <button className='movie-card__button' type='button'></button>
      </div>
      <span className='movie-card__time-code'>1ч 47м</span>
    </article>
  );
}

export default MoviesCard;