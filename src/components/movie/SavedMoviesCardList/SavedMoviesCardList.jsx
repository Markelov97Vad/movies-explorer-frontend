import { handleMovieDataFormat } from "../../../utils/config";
import ErrorMessage from "../../ErrorMessage/ErrorMessage";
import ButtonCross from "../../ui/ButtonCross/ButtonCross";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";

function SavedMoviesCardList({place, moviesList = [], isLoading, errorMesage, handleMovieDelete}) {
  console.log(moviesList);
  console.log('ERROR MESSAGE');
  return ( 
    <section className={`movies-card-list movies-card-list_place_${place}`}>
      {isLoading && <Preloader />}
      {(!isLoading && moviesList.length > 0) && 
      
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
    {(moviesList.length === 0 && errorMesage) && 
      // <ErrorMessage text={errorMesage}/>
      <ErrorMessage text={errorMesage}/>
    }
    </section>
   );
}

export default SavedMoviesCardList;