import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Header from '../Header/Header';
import Main from '../landing/Main/Main';
import Movies from '../movie/Movies/Movies';
// import Footer from '../Footer/Footer';

function App() {
  return ( 
    <>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/movies' element={<Movies />} />
      </Routes>
    </>
  )
}

export default App;
