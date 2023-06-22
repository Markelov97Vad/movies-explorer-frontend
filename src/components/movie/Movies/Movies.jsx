import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useCallback, useEffect, useState } from 'react';
import useMovieSearch from '../../../hooks/useMoviesSearch';
import SavedMovies from '../SavedMovies/SavedMovies';
import moviesApi from '../../../utils/MoviesApi';
import useSearchData from '../../../hooks/useSearchData';
import mainApi from '../../../utils/MainApi';
import useMoviesContext from '../../../hooks/useMoviesContext';
import useResultCache from '../../../hooks/useResultCache';

function Movies({ movies }) {
  const [moviesList, setMoviesList] = useState(()=> {
    const movies = JSON.parse(localStorage.getItem('moviesList'));
    // console.log('useState Movies',movies);
    return movies ? movies : [];
  });
  const [renderMoviesList, setRenderMoviesList] = useState([])
  const [errorMessage, setErrorMessage] = useState('')
  const { handleMoviesFilter } = useMovieSearch(setErrorMessage);
  const { keyword, handleStorageData } = useSearchData();
  const [isLoading, setIsloading] = useState(false);
  const { addUserMovie, savedMoviesList, deleteUserMovie } = useMoviesContext();
  const { setResultCache, getResultCache } = useResultCache();
  // useEffect(() => {
  //   setMoviesList()
  // },[])
  // рендер результата поиска 
  const handleResultRender = (keyword, movies, shortmovies) => {
    const resultSearchMovie = handleMoviesFilter(keyword, movies, shortmovies);
    // сюда приходит movies = boolean //! НЕТ
    // console.log('Проверка Movies 1', movies);
  console.log('RESULTSEARCH',resultSearchMovie);
    setRenderMoviesList(resultSearchMovie);
    setResultCache( 'moviesCache', { movies: resultSearchMovie });
  }
  // результат запроса к API
  const handleMoviesFetch = ({ keyword, shortmovies }) => {
    setIsloading(true);

    moviesApi
      .getMoviesCards()
      .then(movies => {
        setMoviesList(movies);
        localStorage.setItem('moviesList', JSON.stringify(movies));
        // console.log('moviesList', movies);
        return movies
      })
      .then(movies => {
        // console.log('Проверка Movies 2', movies);
        handleResultRender(keyword, movies, shortmovies)
      })
      .catch(err => {
        setErrorMessage('Произошла ошибка во время запроса')
        console.log(err);
      })
      .finally(() => setIsloading(false));
  }

  const handleSubmitMoviesSearch = (value) => {
    handleStorageData(value);
    if(moviesList.length > 0) {
      handleResultRender(value.keyword, moviesList, value.shortmovies)
      // console.log('2');
    } else {
      handleMoviesFetch(value)
      // console.log('1');
    }
  }

  const handleCheckboxShortmovies =(shortmovies) => {
    handleStorageData({ shortmovies });
    
    // console.log('key', keyword,'short', shortmovies,'List', savedMoviesList);
    console.log('KYEVIRD',keyword);
    if (keyword) {
      // handleResultRender(keyword, moviesList, shortmovies)
      // console.log( "handleCheckboxShortmovies", shortmovies);
    }
  }
  // const handleCheckboxShortmovies = useCallback((shortmovies) => {
  //   handleStorageData({ shortmovies });
    
  //   // console.log('key', keyword,'short', shortmovies,'List', savedMoviesList);
  //   if (keyword) {
  //     handleResultRender(keyword, moviesList, shortmovies)
  //     // console.log( "handleCheckboxShortmovies", shortmovies);
  //   }
  // },[])

// сохранить фильм
  const handleMovieSave = (movie) => {
    // console.log(movie);
    return mainApi
      .addMovie(movie)
      .then(addUserMovie)
      .catch((err) => {
        console.log(`Не удалось сохранить фильм, Error: ${err}`);
      })
      // console.log(movie);
  }
// удалить фильм
  const handleMovieDelete = (movieId) => {
    console.log('Id delete',movieId);
    return mainApi
      .deleteMovie(movieId)
      .then(() => deleteUserMovie(movieId))
      .catch(err => console.log(`Не удалось удалить фильм, Error: ${err}`))
  }

  useEffect(() => {
    const movieCache = getResultCache('moviesCache');
    console.log('MoviesCache', movieCache);
    movieCache?.movies && setRenderMoviesList(movieCache.movies)
    // if(movieCache.movies) {
    //   setRenderMoviesList(movieCache.movies)
    // }
  },[getResultCache])
  console.log('ПЕРЕД РЕНДЕР.',renderMoviesList);
  return (
    <>
      <Header />
      <main>
        <SearchForm 
          handleSubmitMoviesSearch={handleSubmitMoviesSearch} 
          handleCheckboxShortmovies={handleCheckboxShortmovies}
          valueCache={true}
        />
        <MoviesCardList 
          place='movies' 
          // movies={movies} 
          moviesList={renderMoviesList}
          savedMoviesList={savedMoviesList}
          isLoading={isLoading}
          handleMovieSave={handleMovieSave}
          handleMovieDelete={handleMovieDelete}
        />
      </main>
      <Footer />
    </>
  )
}

export default Movies;