import { moviesList } from '../../../utils/config';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MovieCardList() {
  return ( 
    <section className='movie-card-list'>
      <div className='movie-card-list__container'>
        {
          moviesList.map((movie) => (
            <MoviesCard key={movie.id} movie={movie} />
          ))
        }
        {/* <MoviesCard nameRu={} /> */}
      </div>
    </section>
   );
}

export default MovieCardList;