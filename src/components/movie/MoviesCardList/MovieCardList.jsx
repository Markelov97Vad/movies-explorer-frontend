import { useEffect, useRef, useState } from 'react';
import { moviesList } from '../../../utils/config';
import Preloader from '../Preloader/Preloader';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MovieCardList() {
  const divBlock = useRef();
  const [count, setCount] = useState(5)
  const [renderButton, setRenderButton] = useState(false);

  useEffect(() => {
    if (moviesList.length > 6) {
      setRenderButton(true)
    }
  }, [])

  const handle = () => {  
    setCount(count + 6)
  }
  
  const movieListForRender = moviesList.filter((el, index) => {
    if (index <= count) {
      return el
    }
    return null
  })
  
  return ( 
    <section className='movie-card-list'>
      {
        !moviesList ? <Preloader/> :
        <div ref={divBlock} className='movie-card-list__container'>
          {
            movieListForRender.map((movie) => (
              <MoviesCard key={movie.id} movie={movie} />
            ))
          }
        </div>
      }
      {
        renderButton && <button className='movie-card-list__button' onClick={handle}>Еще</button>
      }
    </section>
   );
}

export default MovieCardList;