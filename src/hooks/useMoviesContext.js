import { useContext } from "react";
import { MoviesContext } from "../contexts/MoviesContext";

function useUserContext() {
  const moviesContextValue = useContext(MoviesContext);
  return { ...moviesContextValue};
}

export default useUserContext;