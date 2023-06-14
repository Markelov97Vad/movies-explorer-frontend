import { Route, Routes, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Main from '../landing/Main/Main';
import Movies from '../movie/Movies/Movies';
import SavedMovies from '../movie/SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import { LoggetContext } from '../contexts/loggetContext';
import NotFoundPage from '../NotFoundPage/NotFoundPage';


function App() {
  const [loggetIn, setLoggetIn] = useState(false);
  const navigate = useNavigate();

  const handleAuthorize = (data) => {
    setLoggetIn(true);
    navigate('/movies')
  }

  return ( 
    <div className='root'>
      <LoggetContext.Provider value={loggetIn}>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/saved-movies' element={<SavedMovies />}/>
          <Route path='/profile' element={<Profile />} />
          <Route path='/signin' element={<Login onLogin={handleAuthorize}/>} />
          <Route path='/signup' element={<Register />} />
          <Route path='*' element={<NotFoundPage />}/>
        </Routes>
      </LoggetContext.Provider>
    </div>
  )
}

export default App;
