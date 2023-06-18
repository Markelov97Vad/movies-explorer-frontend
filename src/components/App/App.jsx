import { Route, Routes, useNavigate } from "react-router-dom";
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
import { CurrentUser } from "../../contexts/currentUserContext";

function App(props) {
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

  const handleAuthorize = (email, password) => {
    return mainApi
      .authorize(email, password)
      .then((res) => {
        setLoggetIn(true);
        navigate("/movies", { replace: true });
      })
  };

  // useEffect(() => {
  //   moviesApi
  //     .getMoviesCards()
  //     .then((res) => {
  //       setMovies(res);
  //       console.log(res);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);
  useEffect(() => {
    mainApi
      .checkToken()
      .then((res) => {
        setCurrentUser(res);
        setLoggetIn(true);
      })
      .catch(err => {
        err === 401 ?
        console.log('Необходима авторизация')
        :
        console.log(`Не удалось авторизовать пользователя. Ошибка: ${err}`)
      })
  },[])

  return (
    <div className="root">
      <LoggetContext.Provider value={loggetIn}>
        <CurrentUser.Provider value={currentUser}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/movies" element={<Movies movies={movies} />} />
            <Route path="/saved-movies" element={<SavedMovies />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/signin" element={<Login onLogin={handleAuthorize} />} />
            <Route
              path="/signup"
              element={<Register onRegistration={handleRegistration} />}
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </CurrentUser.Provider>
      </LoggetContext.Provider>
    </div>
  );
}

export default App;
