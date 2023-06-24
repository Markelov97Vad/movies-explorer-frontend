import {
  Navigate,
  Route,
  Routes,
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
  const [errorRequest, setErrorRequest] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState('')
  // const { isAppLoaded } = useUserContext()
  const [loggetIn, setLoggetIn] = useState(false);
  // const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false)

  const handleRegistration = (name, email, password) => {
    setIsLoading(true);
    return mainApi
      .register(name, password, email)
      .then(() => {
        navigate("/signin", { replace: true });
      })
      .catch((err) => {
        if (err === 409) {
          setMessage('Пользователь с таким email уже существует')
        }
        if (err === 500) {
          setMessage('При регистрации пользователя произошла ошибка')
        }
        console.log(err)
        setIsLoading(false)
      })
      .finally(() => setIsLoading(false));
  };

  const handleAuthorize = (email, password) => {
    setMessage('')
    setIsLoading(true);
    return mainApi
      .authorize(email, password)
      .then((res) => {
        setLoggetIn(true);
        setCurrentUser(res);
        navigate("/movies", { replace: true });
      })
      .catch((err) => {
        if (err === 401) {
          setMessage('Вы ввели неправильный логин или пароль.');
        }
        if (err === 500) {
          setMessage('При авторизации пользователя произошла ошибка');
        }
        setIsLoading(false);
      })
      .finally(() => {
        setIsLoading(false)
        console.log('ЗАШЕЛ');
      })
  };

  const handleTockenCheck = useCallback(() => {
    return mainApi
      .checkToken()
      .then((res) => {
        setLoggetIn(true);
        setCurrentUser(res);
      })
      .catch((err) => {
        err === 401
          ? console.log("Необходима авторизация")
          : console.log(`Не удалось авторизовать пользователя. Ошибка: ${err}`);
      })
      .finally(() => {
        setIsAppLoaded(true);
        // setMessage('')
      });
  }, []);

  useEffect(() => {
    handleTockenCheck();
  }, []);

  const handleOpenConfirm = () => {
    setIsEditing(true)
  }

  // const funcEdit = () => {
  //   setErrorRequest(!errorRequest)
  // }
  const handleUserInfoChange = (userData) => {
    setMessage('')
    console.log('userDATA' , userData);
    setIsLoading(true);
    return mainApi
      .setUserInfo(userData)
      .then((userData)=> {
        setCurrentUser(userData);
        setIsEditing(false)
      })
      .catch((err) => {
        console.log(`Ошибка в обработке запроса ERR: ${err}`)
        if (err === 409) {
          setMessage('Пользователь с таким email уже существует');
        }
        setIsEditing(true)
        setErrorRequest(true)
        setIsLoading(false)
      })
      .finally(() => {
        setMessage('Данные успешно обновлены')
        setIsLoading(false)
      })
  }

  const handleSignOut = () => {
    console.log('Logout');
    return mainApi
      .logout()
      .then(() => {
        setCurrentUser({});
        setLoggetIn(false);
      })
      .then(() => {
        localStorage.clear();
        sessionStorage.clear();
        // navigate()
        // setErrorRequest(true)
      })
      .catch((err) => {
        setMessage('На сервере произошла ошибка.')
        console.log(err);
      })
      .finally(() =>  navigate('/', { replace: true }));
  }

  useEffect(() => {
    setMessage('');
  }, [navigate]);
  

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
                  <MoviesContextProvider>
                    <SavedMovies />
                  </MoviesContextProvider>
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile
                    handleUserInfoChange={handleUserInfoChange}
                    errorRequest={errorRequest}
                    isEditing={isEditing}
                    isLoading={isLoading}
                    handleOpenConfirm={handleOpenConfirm}
                    message={message}
                    onSignOut={handleSignOut}/>
                </ProtectedRoute>
              }
            />
            <Route
              path="/signin"
              element={<Login 
                onLogin={handleAuthorize} 
                message={message}
                isLoading={isLoading}
              />}
            />
            <Route
              path="/signup"
              element={<Register 
                onRegistration={handleRegistration} 
                message={message}
                isLoading={isLoading}
              />}
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        )}
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
