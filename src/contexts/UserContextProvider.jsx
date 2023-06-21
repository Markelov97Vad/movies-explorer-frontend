import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import { UserContext } from "./UserContext";
import mainApi from "../utils/MainApi";
import { MAIN_API_URL } from "../utils/config";
import { useLocation, useNavigate } from "react-router-dom";

function UserContextProvider({children}) {
  const [currentUser, setCurrentUser] = useState({});
  const [loggetIn, setLoggetIn] = useState(false);
  const [isAppLoaded, setIsAppLoaded] = useState(false);
  // const { state } = useLocation();
  const location = useLocation();
  const navigate = useNavigate();

  const setUserLoggetIn = (data) => {
    setCurrentUser(data);
    setLoggetIn(true);
    console.log(currentUser, 'currentUser');
    console.log(loggetIn, "loggetIn");
  }


  return (
    <UserContext.Provider value={{loggetIn, currentUser, setUserLoggetIn, isAppLoaded}}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
