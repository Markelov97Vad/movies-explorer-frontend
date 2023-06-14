import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies() {
  return (
    <>
      <Header />
      <main>
        <SearchForm />
        <MoviesCardList place='movies'/>
      </main>
      <Footer />
    </>
  )
}

export default Movies;