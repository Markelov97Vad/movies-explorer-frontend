import { useState } from 'react';
import { moviesList } from '../../../utils/config';
import Preloader from '../Preloader/Preloader';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MovieCardList() {
  const [count, setCount] = useState(5)
  const [isLoading, setIsLoading] = useState(false)

  const handle = () => {  
    setCount(count + 6)
  }
  
  const movieListForRender = moviesList.filter((el, index) => {
    if (index <= count) {
      return el
    }
    return null
  })

  const renderButton = movieListForRender.length < moviesList.length;
  
  return ( 
    <section className='movie-card-list'>
      {isLoading && <Preloader/>}
      { !isLoading && 
        <>
          <div className='movie-card-list__container'>
            {
              movieListForRender.map((movie) => (
                <MoviesCard key={movie.id} movie={movie} />
              ))
            }
          </div>
          {renderButton && <button className='movie-card-list__button' onClick={handle}>Еще</button>} 
        </>
      }
    </section>
   );
}

export default MovieCardList;