import { useEffect, useState } from 'react';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import useMovieSearch from '../../../hooks/useMoviesSearch';
import useMoviesContext from '../../../hooks/useMoviesContext';
import useSearchData from '../../../hooks/useSearchData';
import mainApi from '../../../utils/MainApi';
import SavedMoviesCardList from '../SavedMoviesCardList/SavedMoviesCardList';

function SavedMovies() {
  const [errorMessage, setErrorMessage] = useState('');
  const { handleMoviesFilter } = useMovieSearch(setErrorMessage);
  const [renderMoviesList, setRenderMoviesList] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const { addUserMovie, savedMoviesList, deleteUserMovie } = useMoviesContext();
  const { keyword, handleStorageData } = useSearchData();
  const [initialRender, setInitialRender] = useState(true);

  const handleResultRender = (keyword, movies, shortmovies) => {
    setRenderMoviesList(() => handleMoviesFilter(keyword, movies, shortmovies));
  };

  const handleSubmitMoviesSearch = (value) => {
    if(savedMoviesList.length > 0) {
      handleResultRender(value.keyword, savedMoviesList, value.shortmovies)
      console.log('2');
    }
  }

  const handleCheckboxShortmovies = (shortmovies) => {
    handleStorageData({ shortmovies });

    if(keyword) {
      handleResultRender(keyword, shortmovies, savedMoviesList )
      console.log( "handleCheckboxShortmovies", shortmovies);
    }
  }
  console.log(savedMoviesList);

  // удалить фильм
  const handleMovieDelete = (movieId) => {
    console.log('Id delete',movieId);
    return mainApi
      .deleteMovie(movieId)
      .then(() => deleteUserMovie(movieId))
      .catch(err => console.log(`Не удалось удалить фильм, Error: ${err}`))
  }


// useEffect(() => {
//     if(initialRender && savedMoviesList.length > 0) {
//       setRenderMoviesList(setRenderMoviesList);
//         setInitialRender(false);
//     };
// }, [initialRender, savedMoviesList]);
  return ( 
    <>
      <Header />
      <main>
        <SearchForm 
          handleSubmitMoviesSearch={handleSubmitMoviesSearch} 
          handleCheckboxShortmovies={handleCheckboxShortmovies}
        />
        {/* <MoviesCardList 
          place='saved-movies'
          moviesList={savedMoviesList}
          handleMovieDelete={handleMovieDelete}
          savedMoviesList={savedMoviesList}
          isLoading={isLoading}
        /> */}
        <SavedMoviesCardList 
          place='saved-movies' 
          moviesList={savedMoviesList} 
          handleMovieDelete={handleMovieDelete}
        />
      </main>
      <Footer />
    </> 
  );
}

export default SavedMovies;