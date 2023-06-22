function useMovieSearch(handleError) {
  const checkError = (result) => {
    if (result.length === 0) {
      handleError('Ничего не найдено')
      console.log('Ничего не найдено');
    }
  };

  const filterKeywords = ( keyword, movies) => {
    console.log( "DATA MOVIES",movies);
    console.log('DATA 2', keyword);
    // let movies = [];
    const result = movies.filter( movie => {
      // console.log(movie.nameRU.toLowerCase());
      return movie.nameRU.toLowerCase().includes(keyword.toLowerCase())
    });
    // let result = ''
    checkError(result);
    return result
  }

  const filterShortMovies = (movies) => {
    console.log('FILTERSHORT', movies);
    const result = movies.filter( movie => {
      // console.log('длительность' ,movie.duration);
      return movie.duration <= 40
    });
    // let result = '';
    checkError(result);
    console.log('результат короткометражек' ,result);
    return result
  }

  const handleMoviesFilter = (keyword, movies, shortmovies) => {
    console.log('AAAA',movies);
    console.log(keyword);
    let result = filterKeywords(keyword, movies);
    console.log('shortmovies!', shortmovies);
    console.log('RESULT', result);
    if(shortmovies) {
      result = filterShortMovies(result);
    }
    // const result = filterShortmovies(movies)
    console.log('FINAL RESULT', result);
    return result;
  }
  
  return { handleMoviesFilter };
}

export default useMovieSearch;