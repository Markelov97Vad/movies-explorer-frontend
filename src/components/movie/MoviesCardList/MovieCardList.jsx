import { useEffect, useState } from "react";

import "./MoviesCardList.css";
import { moviesList } from "../../../utils/config";
import Preloader from "../Preloader/Preloader";
import MoviesCard from "../MoviesCard/MoviesCard";
import useResize from "../../../hooks/useResize";
import AppendButton from "../../ui/AppendButton/AppendButton";

function MovieCardList() {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const { isScreenMobile, isScreenDesktop } = useResize();

  useEffect(() => {
    if (isScreenMobile) {
      setCount(4);
    }
    if (isScreenDesktop) {
      setCount(11);
    }
  }, [isScreenMobile, isScreenDesktop]);

  const handleClick = () => {
    if (isScreenMobile) {
      setCount(count + 5);
    }
    if (isScreenDesktop) {
      setCount(count + 6);
    }
  };

  const movieListForRender = moviesList.filter((el, index) => {
    if (index <= count) {
      return el;
    }
    return null;
  });

  const renderButton = movieListForRender.length < moviesList.length;

  return (
    <section className="movie-card-list">
      {isLoading && <Preloader />}
      {!isLoading && (
        <>
          <div className="movie-card-list__container">
            {movieListForRender.map((movie) => (
              <MoviesCard key={movie.id} movie={movie} />
            ))}
          </div>
          {renderButton && <AppendButton onClick={handleClick} text='Ещё'/>}
        </>
      )}
    </section>
  );
}

export default MovieCardList;
