import './SearchForm.css';
import FilterCheckbox from '../../FilterCheckbox/FilterCheckbox';
import useFormValid from '../../../hooks/useFormValid';
import SearchButton from '../../ui/SearchButton/SearchButton';

function SearchForm() {
  const { values , handleChange } = useFormValid({});

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  return ( 
    <section className='search-form'>
      <form className='search-form__form' onSubmit={handleSubmit} noValidate>
          <div className='search-form__input-container'>
            <input value={values.movies || ''} onChange={handleChange} className='search-form__input' name='movies' type="text" placeholder='Фильм' required/>
            {/* <span className='focus-border'></span> */}
            <SearchButton />
          </div>
          <FilterCheckbox/>
      </form>
    </section>
   );
}

export default SearchForm;