import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

function useUserContext() {
  const userContextValue = useContext(UserContext);
  return { ...userContextValue};
}

export default useUserContext;