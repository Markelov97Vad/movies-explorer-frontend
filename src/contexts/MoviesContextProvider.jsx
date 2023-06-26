import { useEffect, useState } from "react";
import { MoviesContext } from "./MoviesContext";
import mainApi from "../utils/MainApi";

function MoviesContextProvider({ children }) {
  const [savedMoviesList, setSavedMoviesList] = useState([]);

  useEffect(() => {
    const movies = JSON.parse(localStorage.getItem('savedMovies'));

    if(movies) {
      setSavedMoviesList(movies);
    } else {
      mainApi
        .getMoviesSavedByUser()
        .then(movies => {
          setSavedMoviesList(movies);
          localStorage.setItem('savedMovies', JSON.stringify(movies));
        })
        .catch((err) => {
          console.log(`Не удалось загрузить фильмы пользователя. Ошибка: ${err}`)
        })
    }
  },[]);

  const addUserMovie = (movie) => {
    const newSavedMoviesList = [...savedMoviesList, movie ];
    setSavedMoviesList(newSavedMoviesList);
    localStorage.setItem('savedMovies', JSON.stringify(newSavedMoviesList));
  }

  const deleteUserMovie = (movieId) => {
    const newSavedMoviesList = savedMoviesList.filter(elem => elem._id !== movieId);
    setSavedMoviesList(newSavedMoviesList);
    localStorage.setItem('savedMovies', JSON.stringify(newSavedMoviesList));
  }

  return ( 
    <MoviesContext.Provider value={{ 
        savedMoviesList,
        addUserMovie, 
        deleteUserMovie 
      }}>
      {children}
    </MoviesContext.Provider> );
}

export default MoviesContextProvider;