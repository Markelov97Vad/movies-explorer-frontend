import { useEffect, useState } from "react";
import { MoviesContext } from "./MoviesContext";
import mainApi from "../utils/MainApi";

function MoviesContextProvider({ children }) {
  const [savedMoviesList, setSavedMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const movies = JSON.parse(localStorage.getItem('savedMovies'));

    if(movies) {
      setSavedMoviesList(movies);
      setIsLoading(false)
    }
    mainApi
      .getMoviesSavedByUser()
      .then(movies => {
        setSavedMoviesList(movies);
        localStorage.setItem('savedMovies', JSON.stringify(movies));
      })
      .catch(err => {
        console.log(err, 'Не удалось загрузить фильмы.');
      })
      .finally(() => setIsLoading(false))
  },[])

  return ( 
    <MoviesContext.Provider value={''}>
      {children}
    </MoviesContext.Provider> );
}

export default MoviesContextProvider;