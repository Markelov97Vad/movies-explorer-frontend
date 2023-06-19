import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useEffect, useState } from 'react';
import useMovieSearch from '../../../hooks/useMoviesSearch';
import SavedMovies from '../SavedMovies/SavedMovies';
import moviesApi from '../../../utils/MoviesApi';

function Movies({ movies }) {
  const [moviesList, setMoviesList] = useState(()=> {
    const movies = JSON.parse(localStorage.getItem('movies'));
    return movies ? movies : [];
  });
  const [renderMoviesList, setRenderMoviesList] = useState([])
  const [errorMessage, setErrorMessage] = useState('')
  const { handleMoviesFilter } = useMovieSearch(setErrorMessage);
  const [isLoading, setIsloading] = useState(false);
  // useEffect(() => {
  //   setMoviesList()
  // },[])
  const handleResultRender = (keyword, movies, shortmovies) => {
    const result = handleMoviesFilter(keyword, movies, shortmovies);

    setRenderMoviesList(result);
  }

  function handleMoviesResponse({ keyword, shortmovies }) {
    setIsloading(false);

    moviesApi
      .getMoviesCards()
      .then(movies => {
        setMoviesList(movies);
        localStorage.setItem('movies', JSON.stringify(movies));
        return movies
      })
      .then(movies => handleResultRender(keyword, movies, shortmovies))
      .catch(err => {
        setErrorMessage('Произошла ошибка во время запроса')
        console.log('err');
      })
      .finally(() => setIsloading(false));
  }

  const handleSubmit = (value) => {
    if(moviesList.length > 0) {
      handleResultRender(value.keyword, moviesList, value.shortmovies)
    } else {
      handleMoviesResponse(value)
    }
  }
  return (
    <>
      <Header />
      <main>
        <SearchForm onSubmit={handleSubmit}/>
        <MoviesCardList 
          place='movies' 
          // movies={movies} 
          moviesList={moviesList}
          isLoading={isLoading}
        />
      </main>
      <Footer />
    </>
  )
}

export default Movies;