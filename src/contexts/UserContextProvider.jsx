import { useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import mainApi from "../utils/MainApi";
import { MAIN_API_URL } from "../utils/config";
import { useLocation, useNavigate } from "react-router-dom";

function UserContextProvider({children}) {
  const [currentUser, setCurrentUser] = useState({})
  const [loggetIn, setLoggetIn] = useState(false)
  const location = useLocation();
  const navigete = useNavigate();

  const setUserLoggetIn = (data) => {
    setCurrentUser(data);
    setLoggetIn(true);
    console.log(currentUser, 'currentUser');
    console.log(loggetIn, "loggetIn");
  }

  useEffect(() => {
    mainApi
      .checkToken()
      .then((res) => {
        setUserLoggetIn(res)
        console.log(currentUser, 'currentUser');
        console.log(loggetIn, "loggetIn");
      })
      .catch((err) => {
        err === 401
          ? console.log("Необходима авторизация")
          : console.log(`Не удалось авторизовать пользователя. Ошибка: ${err}`);
      });
  },[])

//   useEffect(() => {
//     const redirect = location.state?.from;
//     console.log(redirect,'fff' );
//     if(loggetIn && redirect) {
//       console.log(redirect,'fff' );
//       navigete('')
//     }
// }, [loggetIn, location]);

  return (
    <UserContext.Provider value={{loggetIn, currentUser, setUserLoggetIn}}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
