import { useEffect, useState } from 'react';

import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import useMovieSearch from '../../../hooks/useMoviesSearch';
import useMoviesContext from '../../../hooks/useMoviesContext';
import useSearchData from '../../../hooks/useSearchData';
import mainApi from '../../../utils/MainApi';
import SavedMoviesCardList from '../SavedMoviesCardList/SavedMoviesCardList';
import { MOVIES_SEARCH_ERROR_MESSAGE, UNDEFINED_SAVED_MOVIES_MESSAGE } from '../../../utils/constants';

function SavedMovies() {
  const [errorMessage, setErrorMessage] = useState('');
  const [renderMoviesList, setRenderMoviesList] = useState([]);
  const [initialRender, setInitialRender] = useState(true);
  const { savedMoviesList, deleteUserMovie } = useMoviesContext();
  const { handleMoviesFilter } = useMovieSearch(setErrorMessage);
  const { keyword, handleStorageData } = useSearchData();

  const handleResultRender = (keyword, movies, shortmovies) => {
    const resultSearchMovie = handleMoviesFilter(keyword, movies, shortmovies);

    setRenderMoviesList(resultSearchMovie);
  };

  const handleSubmitMoviesSearch = (value) => {
    handleStorageData(value);
    
    if(savedMoviesList.length > 0) {
      handleResultRender(value.keyword, savedMoviesList, value.shortmovies)
    }
  }

  const handleCheckboxShortmovies = (shortmovies) => {
    handleStorageData({ shortmovies })
    if(savedMoviesList.length > 0) {
      handleResultRender(keyword, savedMoviesList, shortmovies)
    }
  }

  const handleMovieDelete = (movieId) => {
    return mainApi
      .deleteMovie(movieId)
      .then(() => {
        deleteUserMovie(movieId)
      })
      .then(() => {
        setRenderMoviesList( savedMovies => {
          return savedMovies.filter(movie => movie._id !== movieId)
        })
      })
      .catch(err => console.log(`Не удалось удалить фильм, Error: ${err}`))
  }

  useEffect(() => {
    if(initialRender && savedMoviesList.length > 0) {
      setRenderMoviesList(savedMoviesList);
      setErrorMessage(MOVIES_SEARCH_ERROR_MESSAGE)
      setInitialRender(false);
    } else if (savedMoviesList.length === 0) {
      setErrorMessage(UNDEFINED_SAVED_MOVIES_MESSAGE)
    }
  }, [initialRender, savedMoviesList]);


  return ( 
    <>
      <Header />
      <main>
        <SearchForm 
          handleSubmitMoviesSearch={handleSubmitMoviesSearch} 
          handleCheckboxShortmovies={handleCheckboxShortmovies}
        />
        <SavedMoviesCardList 
          place='saved-movies' 
          moviesList={renderMoviesList} 
          handleMovieDelete={handleMovieDelete}
          errorMessage={errorMessage}
        />
      </main>
      <Footer />
    </> 
  );
}

export default SavedMovies;