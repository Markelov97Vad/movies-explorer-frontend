import {
  Navigate,
  Route,
  Routes,
  Switch,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import "./App.css";
import Main from "../landing/Main/Main";
import Movies from "../movie/Movies/Movies";
import SavedMovies from "../movie/SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import moviesApi from "../../utils/MoviesApi";
import mainApi from "../../utils/MainApi";
// import { CurrentUser } from "../../contexts/UserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import UserContextProvider from "../../contexts/UserContextProvider";
import useUserContext from "../../hooks/useUserContext";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import MoviesContextProvider from "../../contexts/MoviesContextProvider";

function App() {
  const [isAppLoaded, setIsAppLoaded] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  // const { isAppLoaded } = useUserContext()
  const [loggetIn, setLoggetIn] = useState(false);
  // const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  const handleRegistration = (name, email, password) => {
    return mainApi
      .register(name, password, email)
      .then(() => {
        navigate("/signin", { replace: true });
      })
      .catch((err) => console.log(err));
  };

  const handleAuthorize = (email, password) => {
    return mainApi.authorize(email, password).then((res) => {
      setLoggetIn(true);
      navigate("/movies", { replace: true });
    });
  };

  const handleTockenCheck = useCallback(() => {
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
      })
      .finally(() => {
        setIsAppLoaded(true);
      });
  }, []);

  useEffect(() => {
    handleTockenCheck();
  }, []);

  return (
    <div className="root">
      <CurrentUserContext.Provider value={{ loggetIn, currentUser }}>
        {isAppLoaded && (
          <Routes>
            <Route path="/" element={<Main />} />
            <Route
              path="/movies"
              element={
                <ProtectedRoute>
                  <MoviesContextProvider>
                    <Movies />
                  </MoviesContextProvider>
                </ProtectedRoute>
              }
            />
            <Route
              path="/saved-movies"
              element={
                <ProtectedRoute>
                  <SavedMovies />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/signin"
              element={<Login onLogin={handleAuthorize} />}
            />
            <Route
              path="/signup"
              element={<Register onRegistration={handleRegistration} />}
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        )}
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
