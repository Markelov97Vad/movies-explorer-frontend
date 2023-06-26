import "./MoviesCardList.css";
import { handleMovieDataFormat } from "../../../utils/config";
import Preloader from "../Preloader/Preloader";
import MoviesCard from "../MoviesCard/MoviesCard";
import AppendButton from "../../ui/AppendButton/AppendButton";
import ErrorMessage from "../../ErrorMessage/ErrorMessage";
import ButtonLike from "../../ui/ButtonLike/ButtonLike";
import useMoviesCardsRender from "../../../hooks/useMoviesCardsRender";

function MoviesCardList({ isLoading, place, moviesList = [], handleMovieSave, savedMoviesList = [], handleMovieDelete, errorMessage }) {
  const { renderMovies, renderMoviesCard, renderButton } = useMoviesCardsRender(moviesList);
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
