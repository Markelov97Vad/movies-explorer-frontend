import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies({ movies }) {
  return (
    <>
      <Header />
      <main>
        <SearchForm />
        <MoviesCardList place='movies' movies={movies}/>
      </main>
      <Footer />
    </>
  )
}

export default Movies;