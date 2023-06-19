function useMovieSearch(handleError) {
  const checkError = (result) => {
    if (result.length === 0) {
      handleError('Ничего не найдено')
    }
  };

}