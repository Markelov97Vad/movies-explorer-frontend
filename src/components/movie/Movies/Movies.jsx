import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useEffect, useState } from 'react';
import useMovieSearch from '../../../hooks/useMoviesSearch';
import SavedMovies from '../SavedMovies/SavedMovies';
import moviesApi from '../../../utils/MoviesApi';
import useSearchData from '../../../hooks/useSearchData';

function Movies({ movies }) {
  const [moviesList, setMoviesList] = useState(()=> {
    const movies = JSON.parse(localStorage.getItem('moviesList'));
    return movies ? movies : [];
  });
  const [renderMoviesList, setRenderMoviesList] = useState([])
  const [errorMessage, setErrorMessage] = useState('')
  const { handleMoviesFilter } = useMovieSearch(setErrorMessage);
  const { keyword, handleStorageData } = useSearchData();
  const [isLoading, setIsloading] = useState(false);
  // useEffect(() => {
  //   setMoviesList()
  // },[])
  // рендер результата поиска 
  const handleResultRender = (keyword, movies, shortmovies) => {
    const resultSearchMovie = handleMoviesFilter(keyword, movies, shortmovies);

    setRenderMoviesList(resultSearchMovie);
  }
  // результат запроса к API
  const handleMoviesFetch = ({ keyword, shortmovies }) => {
    setIsloading(true);

    moviesApi
      .getMoviesCards()
      .then(movies => {
        setMoviesList(movies);
        localStorage.setItem('moviesList', JSON.stringify(movies));
        console.log('moviesList');
        return movies
      })
      .then(movies => handleResultRender(keyword, movies, shortmovies))
      .catch(err => {
        setErrorMessage('Произошла ошибка во время запроса')
        console.log(err);
      })
      .finally(() => setIsloading(false));
  }

  const handleCheckboxShortmovies = (shortmovies) => {
    handleStorageData({ shortmovies });

    if(keyword) {
      handleResultRender(keyword, shortmovies, moviesList )
      console.log( "handleCheckboxShortmovies", shortmovies);
    }
  }

  const handleSubmitMoviesSearch = (value) => {
    if(moviesList.length > 0) {
      handleResultRender(value.keyword, moviesList, value.shortmovies)
      console.log('2');
    } else {
      handleMoviesFetch(value)
      console.log('1');
    }
  }
  return (
    <>
      <Header />
      <main>
        <SearchForm 
          handleSubmitMoviesSearch={handleSubmitMoviesSearch} 
          handleCheckboxShortmovies={handleCheckboxShortmovies}
        />
        <MoviesCardList 
          place='movies' 
          // movies={movies} 
          moviesList={renderMoviesList}
          isLoading={isLoading}
        />
      </main>
      <Footer />
    </>
  )
}

export default Movies;