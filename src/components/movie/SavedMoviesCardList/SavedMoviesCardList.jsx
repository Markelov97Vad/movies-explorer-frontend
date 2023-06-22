import { handleMovieDataFormat } from "../../../utils/config";
import ErrorMessage from "../../ErrorMessage/ErrorMessage";
import ButtonCross from "../../ui/ButtonCross/ButtonCross";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";

function SavedMoviesCardList({place, moviesList = [], isLoading, errorMesage, handleMovieDelete}) {
  return ( 
    <section className={`movies-card-list movies-card-list_place_${place}`}>
      {isLoading ? <Preloader /> :
      <ul className='movies-card-list__container'>
          {moviesList.map((movie) => {
            // console.log(movie);
            const handleDelete = () => {
              handleMovieDelete(movie._id)
            }

            const handleClick = () => {
              handleDelete();
            }
          return (
            <li key={movie._id}>
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
    }
    {moviesList.length === 0 && <ErrorMessage text='Ничего не найдено'/>}
    </section>
   );
}

export default SavedMoviesCardList;