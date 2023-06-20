import { useEffect, useState } from "react";
import "./MoviesCardList.css";
import { moviesList } from "../../../utils/config";
import Preloader from "../Preloader/Preloader";
import MoviesCard from "../MoviesCard/MoviesCard";
import useResize from "../../../hooks/useResize";
import AppendButton from "../../ui/AppendButton/AppendButton";

function MoviesCardList({ isLoading, place, moviesList = [], }) {
  const [count, setCount] = useState(0);
  // const [isLoading, setIsLoading] = useState(false);
  const { isScreenMobile, isScreenMedium, isScreenDesktop } = useResize();
  console.log(moviesList.length);

  useEffect(() => {
    if (isScreenMobile) {
      setCount(4);
      // setCount(1);
    }
    if (isScreenMedium) {
      setCount(7)
      // setCount(2)
    }
    if (isScreenDesktop) {
      setCount(11);
      // setCount(2);
    }
  }, [isScreenMobile, isScreenDesktop]);

  const handleClick = () => {
    if (isScreenMobile) {
      setCount(count + 5);
    }
    if (isScreenMedium) {
      setCount(count + 8)
    }
    if (isScreenDesktop) {
      setCount(count + 12);
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
    <section className={`movie-card-list movie-card-list_place_${place}`}>
      {isLoading ? <Preloader /> :
        <>
          <ul className='movie-card-list__container'>
              {moviesList.map((movie) => (
              <li key={movie.id}>
                  <MoviesCard movie={movie} />
              </li>
              ))}
          </ul>
          {renderButton && <AppendButton onClick={handleClick} text='Ещё'/>}
        </>
      // )}
              }
    </section>
  );
}

export default MoviesCardList;
