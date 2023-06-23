import { useState } from "react";

function useSearchData() {
  const [keyword, setKeyword] = useState('');
  const [shortMovies, setShortMovies] = useState(true);

  const handleStorageData = ({ shortMovies, keyword }) => {
    setShortMovies(shortMovies);
    console.log('SHORT', shortMovies);
    console.log('KEYWORD LL', keyword);
    if (keyword) {
      setKeyword(keyword);
    }
  }
  return {keyword, shortMovies, handleStorageData};
}

export default useSearchData;