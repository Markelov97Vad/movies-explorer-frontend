import { useState } from "react";

function useSearchData() {
  const [keyword, setKeyword] = useState('');
  const [shortMovies, setShortMovies] = useState(true);

  const handleStorageData = ({ shortMovies, keyword }) => {
    setShortMovies(shortMovies);

    if (keyword) {
      setKeyword(keyword);
    }
  }
  return {keyword, shortMovies, handleStorageData};
}

export default useSearchData;