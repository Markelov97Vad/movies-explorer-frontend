import { useEffect, useState } from "react";
import useResize from "./useResize";

function useMoviesCardsRender(moviesList) {
  const [renderMovies, setRenderMovies] = useState([]);
  const [renderButton, setRenderButton] = useState(false);
  const { cardsCount, newCardsCount } = useResize();

  useEffect(() => {
    setRenderMovies(moviesList.slice(0, cardsCount));
  },[moviesList, cardsCount]);

  useEffect(() => {
    setRenderButton(() => moviesList.length > renderMovies.length)
  }, [moviesList, renderMovies]);

  const renderMoviesCard = () => {
    setRenderMovies(movies => [
      ...movies,
      ...moviesList.slice(movies.length, movies.length + newCardsCount)
    ])
  }
  return {renderButton, renderMovies, renderMoviesCard };
}

export default useMoviesCardsRender;