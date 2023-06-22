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
    console.log('KEY', keyword,'short', shortmovies,'List', savedMoviesList);
    const resultSearchMovie = handleMoviesFilter(keyword, movies, shortmovies);

    // setRenderMoviesList(() => handleMoviesFilter(keyword, movies, shortmovies));
    setRenderMoviesList(resultSearchMovie);
  };

  const handleSubmitMoviesSearch = (value) => {
    handleStorageData(value);

    if(savedMoviesList.length > 0) {
      handleResultRender(value.keyword, savedMoviesList, value.shortmovies)
    }
  }

  const handleCheckboxShortmovies = (shortmovies) => {
    handleStorageData({ shortmovies });

    // if(savedMoviesList.length > 0) {
    //   console.log(savedMoviesList);
    //   console.log('key', keyword,'short', shortmovies,'List', savedMoviesList);
    //   handleResultRender(keyword, shortmovies, savedMoviesList )
    //   // console.log( "handleCheckboxShortmovies", shortmovies);
    // }
    if(savedMoviesList.length > 0) {
      // console.log('MOVIEDLIST',savedMoviesList);
      // console.log('key', keyword,'short', shortmovies,'List', savedMoviesList);
      // handleResultRender(keyword, savedMoviesList, shortmovies)
      // console.log( "handleCheckboxShortmovies", shortmovies);
    }
  }
  // console.log(savedMoviesList);
// const renderList = () => {
//   setRenderMoviesList(savedMoviesList)
// }

  // удалить фильм
  const handleMovieDelete = (movieId) => {
    // console.log('Id delete',movieId);
    return mainApi
      .deleteMovie(movieId)
      .then(() => {
        deleteUserMovie(movieId)
        // renderList();
        // console.log(savedMoviesList);
      })
      .catch(err => console.log(`Не удалось удалить фильм, Error: ${err}`))
  }

  // useEffect(() => {
  //   setRenderMoviesList(savedMoviesList)
  // },[initialRender])


useEffect(() => {
    if(initialRender && savedMoviesList.length > 0) {
      setRenderMoviesList(savedMoviesList);
      setInitialRender(false);
    } else if (!initialRender) {
      setRenderMoviesList(savedMoviesList);
    }
}, [initialRender, savedMoviesList]);
  return ( 
    <>
      <Header />
      <main>
        <SearchForm 
          handleSubmitMoviesSearch={handleSubmitMoviesSearch} 
          handleCheckboxShortmovies={handleCheckboxShortmovies}
          // valueCache={true}
        />
        <SavedMoviesCardList 
          place='saved-movies' 
          moviesList={renderMoviesList} 
          handleMovieDelete={handleMovieDelete}
        />
      </main>
      <Footer />
    </> 
  );
}

export default SavedMovies;