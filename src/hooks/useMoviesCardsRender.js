import { useEffect, useState } from "react";
import useResize from "./useResize";

function useMoviesCardsRender(moviesList) {
  // console.log('В USERENDER',moviesList);
  const [renderMovies, setRenderMovies] = useState([]);
  const [renderButton, setRenderButton] = useState();
  const { cardsCount, newCardsCount } = useResize();

  useEffect(() => {
    // console.log('В ПЕРВОМ EFF', moviesList);
    // console.log('В ПЕРВОМ EFF COUNT', cardsCount);
    setRenderMovies(moviesList.slice(0, cardsCount));
    
    // console.log('ПРОВЕРКА РАБОТЫ 1', renderMovies);
  },[moviesList, cardsCount]);

  useEffect(() => {
    // console.log('Во ВТОРОМ EFF', moviesList)
    setRenderButton(() => moviesList.length > renderMovies.length)
  }, [moviesList, renderMovies]);

  // console.log('ПРОВЕРКА РАБОТЫ 2', renderButton);

  // console.log('ПРОВЕРКА ФИН РЕН', newCardsCount);
  const renderMoviesCard = () => {
    setRenderMovies(movies => [
      ...movies,
      ...moviesList.slice(movies.length, movies.length + newCardsCount)
    ])
  }
  // console.log('RENDERMOVIES', renderMovies);
  return {renderButton, renderMovies, renderMoviesCard };
}

export default useMoviesCardsRender;