import { useEffect, useState } from "react";
import "./MoviesCardList.css";
import { handleMovieDataFormat, moviesList } from "../../../utils/config";
import Preloader from "../Preloader/Preloader";
import MoviesCard from "../MoviesCard/MoviesCard";
import useResize from "../../../hooks/useResize";
import AppendButton from "../../ui/AppendButton/AppendButton";
import ErrorMessage from "../../ErrorMessage/ErrorMessage";
import ButtonLike from "../../ui/ButtonLike/ButtonLike";
import ButtonCross from "../../ui/ButtonCross/ButtonCross";
import { useLocation } from "react-router-dom";
import useMoviesCardsRender from "../../../hooks/useMoviesCardsRender";

function MoviesCardList({ isLoading, place, moviesList = [], handleMovieSave, savedMoviesList = [], handleMovieDelete, errorMessage }) {
  // const [count, setCount] = useState(0);
  // const [isLoading, setIsLoading] = useState(false);
  // const { isScreenMobile, isScreenMedium, isScreenDesktop } = useResize();
  // console.log(moviesList.length);
  // const location = useLocation();
  // console.log('ПОСЛЕ ПРОБРОСА',moviesList);
  const { renderMovies, renderMoviesCard, renderButton } = useMoviesCardsRender(moviesList);
  // console.log('USERENDER FINAL 2',renderMovies);
  // console.log('ERROR MESSAGE', errorMessage)
  // console.log('MOVIE LIST LIST', moviesList)
  // console.log('RENDERMoviesCARD', renderMoviesCard)
  return (
    <section className={`movies-card-list movies-card-list_place_${place}`}>
      {isLoading && <Preloader /> }
      {(!isLoading && renderMovies.length > 0) &&
        <>
          <ul className='movies-card-list__container'>
            {renderMovies.map((movie) => {
              const movieData = handleMovieDataFormat(movie);
              const isOwner = savedMoviesList.some(savedMovie => savedMovie.movieId === movie.id);
              const handleSave = () => {
                handleMovieSave(movieData)
              }

              const handleDelete = () => {
                const movieId = savedMoviesList.find(elem => elem.nameRU === movieData.nameRU)
                handleMovieDelete(movieId._id)
              }

              const handleClick = () => {
                if(!isOwner) {
                  handleSave();
                } else {
                  handleDelete();
                }
              }
            return (
              <li key={movie.id}>
                  <MoviesCard 
                    movie={movie}
                    handleClick={handleClick}
                    Button={ButtonLike}
                    savedMoviesList={savedMoviesList}
                    isOwner={isOwner}
                  />
              </li>
            )
            })}
          </ul>
          {renderButton && <AppendButton onClick={renderMoviesCard} text='Ещё'/>}
        </>
      }
    {(moviesList.length === 0 && errorMessage ) && 
      <ErrorMessage text={errorMessage} place='movie-card-list'/>
    }
    </section>
  );
}

export default MoviesCardList;
