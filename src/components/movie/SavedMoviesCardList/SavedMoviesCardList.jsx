import { handleMovieDataFormat } from "../../../utils/config";
import ErrorMessage from "../../ErrorMessage/ErrorMessage";
import ButtonCross from "../../ui/ButtonCross/ButtonCross";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";

function SavedMoviesCardList({place, moviesList = [], isLoading, errorMesage, handleMovieDelete}) {
  return ( 
    <section className={`movie-card-list movie-card-list_place_${place}`}>
      {isLoading ? <Preloader /> :
      <>
      <ul className='movie-card-list__container'>
          {moviesList.map((movie) => {
            // const movieData = handleMovieDataFormat(movie);
            // const isOwner = savedMoviesList.some(savedMovie => savedMovie.movieId === movie.id);
            // console.log('IsOwner',isOwner);
            // const handleSave = handleMovieSave.bind(null, movieData);
            console.log(movie);
            const handleDelete = () => {
              // const movieId = moviesList.find(elem => elem.nameRU === movieData.nameRU)
              handleMovieDelete(movie._id)
            }

            const handleClick = () => {
              handleDelete();
            }
          return (
            <li key={movie.id}>
                <MoviesCard 
                  movie={movie} 
                  // handleMovieSave={handleMovieSave}
                  // savedMoviesList={savedMoviesList}
                  Button={ButtonCross}
                  handleClick={handleClick}
                  handleMovieDelete={handleMovieDelete}
                  place='card'
                />
            </li>
          )
        })}
      </ul>
    </>
    }
    {moviesList.length === 0 && <ErrorMessage text='Ничего не найдено'/>}
    </section>
   );
}

export default SavedMoviesCardList;