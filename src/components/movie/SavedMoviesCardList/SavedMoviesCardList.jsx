import ErrorMessage from "../../ErrorMessage/ErrorMessage";
import ButtonCross from "../../ui/ButtonCross/ButtonCross";
import MoviesCard from "../MoviesCard/MoviesCard";

function SavedMoviesCardList({ place, moviesList = [], errorMessage, handleMovieDelete }) {
  return ( 
    <section className={`movies-card-list movies-card-list_place_${place}`}>
      {moviesList.length > 0 && 
      <ul className='movies-card-list__container'>
          {moviesList.map((movie) => {
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
                  Button={ButtonCross}
                  handleClick={handleClick}
                  // handleMovieDelete={handleMovieDelete}
                  place='card'
                />
            </li>
          )
        })}
      </ul>
    }
    {(moviesList.length === 0 && errorMessage) && 
      <ErrorMessage text={errorMessage} place='movie-card-list'/>
    }
    </section>
   );
}

export default SavedMoviesCardList;