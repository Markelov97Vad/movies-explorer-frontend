import './MoviesCard.css';

function MoviesCard({ movie }) {
  const { image, nameRu, duration } = movie;
  const getTimeFromMinutes = ((time) => {
    const minutes = time % 60;
    const hour = Math.floor(time / 60);

    return `${hour}ч ${minutes}м`;
  })

  return ( 
    <article className='movie-card'>
      <img className='movie-card__image' src={`${image}`} alt={nameRu} />
      <div className='movie-card__wrapper'>
        <h4 className='movie-card__title'>{nameRu}</h4>
        <button className='movie-card__button' type='button'></button>
      </div>
      <span className='movie-card__time-code'>{getTimeFromMinutes(duration)}</span>
    </article>
  );
}

export default MoviesCard;