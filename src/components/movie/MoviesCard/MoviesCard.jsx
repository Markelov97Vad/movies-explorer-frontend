import { useLocation } from 'react-router-dom';
import './MoviesCard.css';
import ButtonCross from '../../ui/ButtonCross/ButtonCross';
import ButtonLike from '../../ui/ButtonLike/ButtonLike';
import { handleMovieDataFormat } from '../../../utils/config';
import { useState } from 'react';

function MoviesCard({ movie, handleMovieSave, savedMoviesList }) {
  const { image, nameRU, duration, trailerLink } = movie;
  const { pathname } = useLocation();
  const [moviesListN, setMoviesListN] = useState([])
  
  const getTimeFromMinutes = ((time) => {
    const minutes = time % 60;
    const hour = Math.floor(time / 60);

    return `${hour}ч ${minutes}м`;
  })

  // const movieData = handleMovieDataFormat(movie);
  const isOwner = savedMoviesList.some(savedMovie => savedMovie.movieId === movie.id);
  // console.log('IsOwner',isOwner);
  // const handleSave = handleMovieSave(movieData);
  const handleSave = () => {
    const addMovie = handleMovieDataFormat(movie)
    // const arrMovie = [...moviesListN, addMovie]
    // setMoviesListN(arrMovie)
    handleMovieSave(addMovie)

    
    // console.log(arrMovie);
    // console.log(addMovie);
    // console.log(moviesListN);
  }

  // const handleClick = () => {
  //   const d =  handleMovieSave.bind(null,movie)
  //   console.log(movie);
  //   return d
  // }

  // const handleSave = handleMovieSave.bind(null, movieData)


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
            <ButtonLike  handleClick={handleSave}/> :
            <ButtonCross place='card'/>
          }
        </div>
        <span className='movies-card__time-code'>{getTimeFromMinutes(duration)}</span>
      </div>
    </article>
  );
}

export default MoviesCard;