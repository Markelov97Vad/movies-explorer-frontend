import "./App.css";
import {
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { useCallback, useEffect, useState } from "react";

import Main from "../landing/Main/Main";
import Movies from "../movie/Movies/Movies";
import SavedMovies from "../movie/SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import mainApi from "../../utils/MainApi";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import MoviesContextProvider from "../../contexts/MoviesContextProvider";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { 
  CONFLICT_CODE, 
  SERVER_ERROR_CODE, 
  SERVER_ERROR_SIGNIN_MESSAGE, 
  SERVER_ERROR_SIGNOUT_MESSAGE, 
  SERVER_ERROR_SIGNUP_MESSAGE, 
  SUCCESS_MESSAGE, 
  UNAUTHORIZED_CODE, 
  UNAUTHORIZED_ERROR_AUTH_MESSAGE, 
  UNAUTHORIZED_ERROR_CHECKTOKEN_MESSAGE, 
  UNAUTHORIZED_ERROR_CONFIRM_MESSAGE, 
  UNAUTHORIZED_ERROR_EMAIL_MESSAGE 
} from "../../utils/constants";

function App() {
  const [isAppLoaded, setIsAppLoaded] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [errorRequest, setErrorRequest] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState('');
  const [loggetIn, setLoggetIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegistration = (inputValue) => {
    console.log('Inputvalues',inputValue);
    setIsLoading(true);
    return mainApi
      .register(inputValue)
      .then((res) => {
        console.log(res);
        handleAuthorize(inputValue)
      })
      .catch((err) => {
        if (err === CONFLICT_CODE) {
          setMessage(UNAUTHORIZED_ERROR_EMAIL_MESSAGE)
        }
        if (err === SERVER_ERROR_CODE) {
          setMessage(SERVER_ERROR_SIGNUP_MESSAGE)
        }
        setIsLoading(false)
      })
      .finally(() => setIsLoading(false));
  };

  const handleAuthorize = (inputValue) => {
    setMessage('')
    setIsLoading(true);
    return mainApi
      .authorize(inputValue)
      .then((res) => {
        setLoggetIn(true);
        setCurrentUser(res);
        navigate("/movies", { replace: true });
      })
      .catch((err) => {
        if (err === UNAUTHORIZED_CODE) {
          setMessage(UNAUTHORIZED_ERROR_CONFIRM_MESSAGE);
        }
        if (err === SERVER_ERROR_CODE) {
          setMessage(SERVER_ERROR_SIGNIN_MESSAGE);
        }
        setIsLoading(false);
      })
      .finally(() => {
        setIsLoading(false)
      });
  };

  const handleTockenCheck = useCallback(() => {
    return mainApi
      .checkToken()
      .then((res) => {
        setLoggetIn(true);
        setCurrentUser(res);
      })
      .catch((err) => {
        err === UNAUTHORIZED_CODE
          ? console.log(UNAUTHORIZED_ERROR_AUTH_MESSAGE)
          : console.log(UNAUTHORIZED_ERROR_CHECKTOKEN_MESSAGE, err);
      })
      .finally(() => {
        setIsAppLoaded(true);
      });
  }, []);

  useEffect(() => {
    handleTockenCheck();
  }, []);

  const handleOpenConfirm = () => {
    setIsEditing(true)
  }

  const handleUserInfoChange = (userData) => {
    setMessage('')
    setIsLoading(true);
    return mainApi
      .setUserInfo(userData)
      .then((userData)=> {
        setCurrentUser(userData);
        setIsEditing(false)
      })
      .catch((err) => {
        if (err === CONFLICT_CODE) {
          setMessage(UNAUTHORIZED_ERROR_EMAIL_MESSAGE);
        }
        setIsEditing(true)
        setErrorRequest(true)
        setIsLoading(false)
      })
      .finally(() => {
        setMessage(SUCCESS_MESSAGE)
        setIsLoading(false)
      })
  }

  const handleSignOut = () => {
    setMessage('')
    return mainApi
      .logout()
      .then(() => {
        setCurrentUser({});
        setLoggetIn(false);
      })
      .then(() => {
        localStorage.clear();
        sessionStorage.clear();
      })
      .catch(() => setMessage(SERVER_ERROR_SIGNOUT_MESSAGE))
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
                    onSignOut={handleSignOut}
                  />
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
