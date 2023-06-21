import { useLocation } from 'react-router-dom';
import './MoviesCard.css';
import ButtonCross from '../../ui/ButtonCross/ButtonCross';
import ButtonLike from '../../ui/ButtonLike/ButtonLike';
import { handleMovieDataFormat } from '../../../utils/config';
import { useState } from 'react';

function MoviesCard({ movie, handleMovieSave, savedMoviesList, handleMovieDelete, handleClick, Button, isOwner, place}) {
  const { image, nameRU, duration, trailerLink } = movie;
  console.log('IMAGE',image);
  const { pathname } = useLocation();
  
  const getTimeFromMinutes = ((time) => {
    const minutes = time % 60;
    const hour = Math.floor(time / 60);

    return `${hour}ч ${minutes}м`;
  })

  // const movieData = handleMovieDataFormat(movie);
  // const isOwner = savedMoviesList.some(savedMovie => savedMovie.movieId === movie.id);
  // console.log('IsOwner',isOwner);
  // console.log('savedMoviesList',savedMoviesList);
  // const movieData = handleMovieDataFormat(movie);
  // console.log('MovieData',movieData);

  // const handleSave = handleMovieSave(movieData);
  // const handleSave = () => {
  //   // const addMovie = handleMovieDataFormat(movie)
  //   // const arrMovie = [...moviesListN, addMovie]
  //   // setMoviesListN(arrMovie)
  //   handleMovieSave(movieData)

    
  //   // console.log(arrMovie);
  //   // console.log(addMovie);
  //   // console.log(moviesListN);
  // }

  // const handleDelete = () => {
  //   const movieId = savedMoviesList.find(elem => elem.nameRU === movieData.nameRU)
  //   console.log('ID для удаления',movieId._id);
  //   handleMovieDelete(movieId._id)
  // }
  const imageUrl = `https://api.nomoreparties.co${image.url}`;
  const imageUrl2 = image;
  return ( 
    <article className='movies-card'>
      <a className='movies-card__link' href={trailerLink} target='_blank' rel="noreferrer">
        {/* <img className='movies-card__image' src={`https://api.nomoreparties.co${image.url}`} alt={nameRU} /> */}
        <img className='movies-card__image' src={pathname === '/movies'? imageUrl : imageUrl2} alt={nameRU} />
      </a>
      <div className='movies-card__info'>
        <div className='movies-card__wrapper'>
          <h2 className='movies-card__title'>{nameRU}</h2>
          {/* {
            pathname === '/movies' ?
            <ButtonLike handleClick={handleClick}  isOwner={isOwner}/> :
            // <ButtonCross handleDelete={handleDelete} place='card'/>
            <ButtonCross place='card'/>
          } */}
          <Button handleClick={handleClick} isOwner={isOwner} place={place}/>
        </div>
        <span className='movies-card__time-code'>{getTimeFromMinutes(duration)}</span>
      </div>
    </article>
  );
}

export default MoviesCard;