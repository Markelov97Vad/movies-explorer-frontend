import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import MovieCardList from '../MoviesCardList/MovieCardList';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css'

function SavedMovies() {
  return ( 
    <>
      <Header />
      <main>
        <SearchForm />
        <MovieCardList />
      </main>
      <Footer />
    </> 
  );
}

export default SavedMovies;