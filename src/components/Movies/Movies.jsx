import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Movies.css';
import SearchForm from './SearchForm/SearchForm';

function Movies() {
  return (
    <div>
      <Header />
      <main>
        <SearchForm />
      </main>
      <Footer />
    </div>
  )
}

export default Movies;