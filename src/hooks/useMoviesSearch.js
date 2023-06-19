function useMovieSearch(handleError) {
  const checkError = (result) => {
    if (result.length === 0) {
      handleError('Ничего не найдено')
    }
  };

  const filterKeywords = (movies, keyword) => {
    const result = movies.filter(movie => movie.nameRU.toLowerCase().includes(keyword));
    checkError(result);
    return result
  }

  const filterShortMovies = (movies) => {
    const result = movies.filter(movie => movie.duration >= 40);
    checkError(result);
    return result
  }

  const handleMoviesFilter = (keyword, movies, shortmovies) => {
    let result = filterKeywords(movies, keyword);

    if(!shortmovies) {
      result = filterShortMovies(result);
    }

    return result;
  }
  
  return { handleMoviesFilter };
}

export default useMovieSearch;