import { Route, Routes, Switch, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import Main from "../landing/Main/Main";
import Movies from "../movie/Movies/Movies";
import SavedMovies from "../movie/SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import { LoggetContext } from "../../contexts/loggetContext";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import moviesApi from "../../utils/MoviesApi";
import mainApi from "../../utils/MainApi";
// import { CurrentUser } from "../../contexts/UserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import UserContextProvider from "../../contexts/UserContextProvider";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [loggetIn, setLoggetIn] = useState(false);
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  const handleRegistration = (name, email, password) => {
    return mainApi
      .register(name, password, email)
      .then(() => {
        navigate("/signin", { replace: true });
      })
      .catch((err) => console.log(err));
  };

  // const handleAuthorize = (email, password) => {
  //   return mainApi.authorize(email, password).then((res) => {
  //     setLoggetIn(true);
  //     navigate("/movies", { replace: true });
  //   });
  // };

  // useEffect(() => {
  //   moviesApi
  //     .getMoviesCards()
  //     .then((res) => {
  //       setMovies(res);
  //       console.log(res);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);
  // useEffect(() => {
  //   mainApi
  //     .checkToken()
  //     .then((res) => {
  //       setCurrentUser(res);
  //       console.log(currentUser);
  //       setLoggetIn(true);
  //     })
  //     .catch(err => {
  //       err === 401 ?
  //       console.log('Необходима авторизация')
  //       :
  //       console.log(`Не удалось авторизовать пользователя. Ошибка: ${err}`)
  //     })
  // },[loggetIn])

  const handleTockenCheck = () => {
    return mainApi
      .checkToken()
      .then((res) => {
        setLoggetIn(true);
        setCurrentUser(res);
        console.log(currentUser);
        console.log(loggetIn, "O");
      })
      .catch((err) => {
        err === 401
          ? console.log("Необходима авторизация")
          : console.log(`Не удалось авторизовать пользователя. Ошибка: ${err}`);
      });
  };

  useEffect(() => {
    console.log(loggetIn);
    handleTockenCheck();
  }, [loggetIn]);

  return (
    <div className="root">
      {/* <LoggetContext.Provider value={loggetIn}>
        <CurrentUser.Provider value={currentUser}> */}
        <UserContextProvider>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route
              path="/movies"
              element={
                <ProtectedRoute
                  element={Movies}
                  movies={movies}
                  loggetIn={loggetIn}
                />
              }
            />
            {/* <Route path="/saved-movies" element={<ProtectedRoute element={SavedMovies} loggetIn={loggetIn}/>} />
            <Route path="/profile" element={<ProtectedRoute element={Profile} loggetIn={loggetIn} />} /> */}
            {/* <Route path="/saved-movies" element={<SavedMovies />} /> */}
            {/* <Route path="/profile" element={<Profile />} /> */}
            <Route
              path="/signin"
              element={<Login />}
            />
            <Route
              path="/signup"
              element={<Register onRegistration={handleRegistration} />}
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </UserContextProvider>
        {/* </CurrentUser.Provider>
      </LoggetContext.Provider> */}
    </div>
  );
}

export default App;
