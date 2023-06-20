function useMovieSearch(handleError) {
  const checkError = (result) => {
    if (result.length === 0) {
      handleError('Ничего не найдено')
      console.log('Ничего не найдено');
    }
  };

  const filterKeywords = (movies, keyword) => {
    const result = movies.filter( movie => {
      // console.log(movie.nameRU.toLowerCase());
      return movie.nameRU.toLowerCase().includes(keyword.toLowerCase())
    });
    checkError(result);
    return result
  }

  const filterShortMovies = (movies) => {
    const result = movies.filter( movie => {
      console.log('длительность' ,movie.duration);
      return movie.duration <= 40
    });
    checkError(result);
    console.log('результат короткометражек' ,result);
    return result
  }

  // const filterShortmovies = (movies) => {
  //   const res = movies.filter(movie => {
  //     return movie.duration <= 40
  //   })
  //   return res
  // }

  const handleMoviesFilter = (keyword, movies, shortmovies = false) => {
    let result = filterKeywords(movies, keyword);
    console.log('shortmovies!', shortmovies);
    if(shortmovies) {
      result = filterShortMovies(result);
    }
    // const result = filterShortmovies(movies)
    return result;
  }
  
  return { handleMoviesFilter };
}

export default useMovieSearch;