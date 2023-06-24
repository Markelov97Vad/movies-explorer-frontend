import { MOVIES_SEARCH_ERROR_MESSAGE } from "../utils/constants";

function useMovieSearch(handleError) {
  const checkError = (result) => {
    if (result.length === 0) {
      handleError(MOVIES_SEARCH_ERROR_MESSAGE)
    }
  };

  const filterKeywords = ( keyword, movies) => {
    const result = movies.filter( movie => {
      return movie.nameRU.toLowerCase().includes(keyword.toLowerCase())
    });
    checkError(result);
    return result
  }

  const filterShortMovies = (movies) => {
    const result = movies.filter( movie => {
      return movie.duration <= 40
    });
    checkError(result);
    return result
  }

  const handleMoviesFilter = (keyword, movies, shortmovies) => {
    let result = filterKeywords(keyword, movies);
    if(shortmovies) {
      result = filterShortMovies(result);
    }
    return result;
  }
  
  return { handleMoviesFilter };
}

export default useMovieSearch;