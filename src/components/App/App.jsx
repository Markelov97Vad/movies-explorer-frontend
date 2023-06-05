import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from '../landing/Main/Main';
import Movies from '../movie/Movies/Movies';
import SavedMovies from '../movie/SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';

function App() {
  return ( 
    <div className='root'>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/saved-movies' element={<SavedMovies />}/>
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  )
}

export default App;
