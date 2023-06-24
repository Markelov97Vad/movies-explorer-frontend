import { useLocation } from 'react-router-dom';
import './MoviesCard.css';
import { MOVIES_BASE_API_URL } from '../../../utils/constants';

function MoviesCard({ movie, handleClick, Button, isOwner, place}) {
  const { pathname } = useLocation();
  const { image, nameRU, duration, trailerLink } = movie;
  const imageUrlForMovies = MOVIES_BASE_API_URL + image.url;
  const imageUrlForSavedMovies = image;
  
  const getTimeFromMinutes = ((time) => {
    const minutes = time % 60;
    const hour = Math.floor(time / 60);

    return `${hour}ч ${minutes}м`;
  })

  return ( 
    <article className='movies-card'>
      <a className='movies-card__link' href={trailerLink} target='_blank' rel="noreferrer">
        <img className='movies-card__image' src={pathname === '/movies' ? imageUrlForMovies : imageUrlForSavedMovies} alt={nameRU} />
      </a>
      <div className='movies-card__info'>
        <div className='movies-card__wrapper'>
          <h2 className='movies-card__title'>{nameRU}</h2>
          <Button handleClick={handleClick} isOwner={isOwner} place={place}/>
        </div>
        <span className='movies-card__time-code'>{getTimeFromMinutes(duration)}</span>
      </div>
    </article>
  );
}

export default MoviesCard;