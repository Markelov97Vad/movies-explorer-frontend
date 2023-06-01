import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MovieCardList() {
  return ( 
    <section className='content'>
      <div className='movie-card-list'>
        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/>
      </div>
    </section>
   );
}

export default MovieCardList;