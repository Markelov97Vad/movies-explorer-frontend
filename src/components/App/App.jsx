import { Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import Main from '../landing/Main/Main';
import Movies from '../movie/Movies/Movies';
import SavedMovies from '../movie/SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import { LoggetContext } from '../contexts/loggetContext';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import moviesApi from '../../utils/MoviesApi';
import mainApi from '../../utils/MainApi';


function App() {
  const [loggetIn, setLoggetIn] = useState(false);
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  const handleRegistration = (name, email, password) => {
    return mainApi.register(name, password, email)
      .then(() => {
        navigate('/signin', { replace: true });
      })
      .catch((err) => console.log(err))
  }

  const handleAuthorize = (data) => {
    setLoggetIn(true);
    navigate('/movies', { replace: true });
  };

  useEffect(() => {
    moviesApi.getMoviesCards()
      .then((res) => {
        setMovies(res)
        console.log(res);
      })
      .catch((err) => console.log(err))
      
  },[]);

  return ( 
    <div className='root'>
      <LoggetContext.Provider value={loggetIn}>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/movies' element={<Movies movies={movies}/>} />
          <Route path='/saved-movies' element={<SavedMovies />}/>
          <Route path='/profile' element={<Profile />} />
          <Route path='/signin' element={<Login onLogin={handleAuthorize}/>} />
          <Route path='/signup' element={<Register onRegistration={handleRegistration}/>} />
          <Route path='*' element={<NotFoundPage />}/>
        </Routes>
      </LoggetContext.Provider>
    </div>
  )
}

export default App;
