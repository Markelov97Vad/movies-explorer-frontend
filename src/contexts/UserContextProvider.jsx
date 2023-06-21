import { useState } from "react";
import { CurrentUserContext } from "./CurrentUserContext";
// import mainApi from "../utils/MainApi";
// import { MAIN_API_URL } from "../utils/config";
// import { useLocation, useNavigate } from "react-router-dom";

function UserContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState({});
  const [loggetIn, setLoggetIn] = useState(false);
  const [isAppLoaded, setIsAppLoaded] = useState(false);
  // const { state } = useLocation();
  // const location = useLocation();
  // const navigate = useNavigate();

  const setUserLoggetIn = (data) => {
    setCurrentUser(data);
    setLoggetIn(true);
    console.log(currentUser, "currentUser");
    console.log(loggetIn, "loggetIn");
  };

  return (
    <CurrentUserContext.Provider
      value={{ loggetIn, currentUser, setUserLoggetIn, isAppLoaded }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
}

export default UserContextProvider;
