import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useEffect, useState } from 'react';

function Movies({ movies }) {
  const [moviesList, setMoviesList] = useState([])
  // useEffect(() => {
    
  // },[])
  const handleResultRender = (keyword, movies, shortmovies) => {
    // const result 
  }

  function handleMoviesResponse() {
    
  }

  const handleSubmit = (value) => {
    if(moviesList.length > 0) {
      
    } else {
      handleMoviesResponse(value)
    }
  }
  return (
    <>
      <Header />
      <main>
        <SearchForm />
        <MoviesCardList place='movies' movies={movies}/>
      </main>
      <Footer />
    </>
  )
}

export default Movies;