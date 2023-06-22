import { useEffect, useState } from "react";
import { MoviesContext } from "./MoviesContext";
import mainApi from "../utils/MainApi";

function MoviesContextProvider({ children }) {
  const [savedMoviesList, setSavedMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  const checkSavedMovies = (moviesList) => {
    if(moviesList.length === 0) {
      console.log('нет сохраненных фильмов');
    }
  }

  useEffect(() => {
    setIsLoading(true);
    const movies = JSON.parse(localStorage.getItem('savedMovies'));
    // console.log('MOVIES',movies);
    if(movies) {
      // console.log('MOVIES',movies);
      setSavedMoviesList(movies);
      setIsLoading(false)
    } else {
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
    }
  },[]);

  const addUserMovie = (movie) => {
    // console.log('ТУТ',movie);
    const newSavedMoviesList = [...savedMoviesList, movie ];
    setSavedMoviesList(newSavedMoviesList);
    localStorage.setItem('savedMovies', JSON.stringify(newSavedMoviesList));
  }

  const deleteUserMovie = (movieId) => {
    const newSavedMoviesList = savedMoviesList.filter(elem => elem._id !== movieId);
    setSavedMoviesList(newSavedMoviesList);
    localStorage.setItem('savedMovies', JSON.stringify(newSavedMoviesList));
    checkSavedMovies(newSavedMoviesList);
  }


  return ( 
    <MoviesContext.Provider value={{savedMoviesList, isLoading, addUserMovie, deleteUserMovie}}>
      {children}
    </MoviesContext.Provider> );
}

export default MoviesContextProvider;