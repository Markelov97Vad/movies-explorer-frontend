import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function useUserContext() {
  const userContextValue = useContext(CurrentUserContext);
  return { ...userContextValue };
}

export default useUserContext;