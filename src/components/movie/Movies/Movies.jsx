import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MovieCardList from '../MoviesCardList/MovieCardList';

function Movies() {
  return (
    <>
      <Header>

      </Header>
      <main>
        <SearchForm />
        <MovieCardList />
      </main>
      <Footer />
    </>
  )
}

export default Movies;