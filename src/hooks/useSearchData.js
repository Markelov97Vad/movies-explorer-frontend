import { useState } from "react";

function useSearchData() {
  const [keyword, setKeyword] = useState('');
  const [shortMovies, setShortMovies] = useState(true);

  const handleStorageData = ({ shortmovies, keyword }) => {
    setShortMovies(shortmovies);
    
    if (keyword) {
      setKeyword(keyword);
    }
  }
  return {keyword, shortMovies, handleStorageData};
}

export default useSearchData;