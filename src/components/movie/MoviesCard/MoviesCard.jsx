import { useLocation } from 'react-router-dom';
import './MoviesCard.css';
import ButtonCross from '../../ui/ButtonCross/ButtonCross';
import ButtonLike from '../../ui/ButtonLike/ButtonLike';

function MoviesCard({ movie }) {
  const { image, nameRU, duration, trailerLink } = movie;
  const { pathname } = useLocation();
  
  const getTimeFromMinutes = ((time) => {
    const minutes = time % 60;
    const hour = Math.floor(time / 60);

    return `${hour}ч ${minutes}м`;
  })

  return ( 
    <article className='movies-card'>
      <a className='movies-card__link' href={trailerLink} target='_blank' rel="noreferrer">
        <img className='movies-card__image' src={`https://api.nomoreparties.co${image.url}`} alt={nameRU} />
      </a>
      <div className='movies-card__info'>
        <div className='movies-card__wrapper'>
          <h2 className='movies-card__title'>{nameRU}</h2>
          {
            pathname === '/movies' ?
            <ButtonLike /> :
            <ButtonCross place='card'/>
          }
        </div>
        <span className='movies-card__time-code'>{getTimeFromMinutes(duration)}</span>
      </div>
    </article>
  );
}

export default MoviesCard;