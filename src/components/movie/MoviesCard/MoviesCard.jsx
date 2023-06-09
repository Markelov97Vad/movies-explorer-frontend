import { useLocation } from 'react-router-dom';
import ButtonCross from '../../ui/ButtonCross/ButtonCross';
import './MoviesCard.css';
import ButtonLike from '../../ui/ButtonLike/ButtonLike';

function MoviesCard({ movie }) {
  const { image, nameRu, duration } = movie;
  const { pathname } = useLocation();
  

  const getTimeFromMinutes = ((time) => {
    const minutes = time % 60;
    const hour = Math.floor(time / 60);

    return `${hour}ч ${minutes}м`;
  })

  return ( 
    <article className='movies-card'>
      <img className='movies-card__image' src={`${image}`} alt={nameRu} />
      <div className='movies-card__wrapper'>
        <h4 className='movies-card__title'>{nameRu}</h4>
        {
          pathname === '/movies' ?
          <ButtonLike /> :
          <ButtonCross place='card'/>
        }
      </div>
      <span className='movies-card__time-code'>{getTimeFromMinutes(duration)}</span>
    </article>
  );
}

export default MoviesCard;