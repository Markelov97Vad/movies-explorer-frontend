import './SearchForm.css';
import FilterCheckbox from '../../FilterCheckbox/FilterCheckbox';


function SearchForm() {
  return ( 
    <section className='search-form'>
      <form className='search-form__form'>
          <fieldset className='search-form__input-container'>
            <input className='search-form__input' type="text" placeholder='Фильмы'/>
            <button className='search-form__button'></button>
          </fieldset>
          <FilterCheckbox/>
      </form>
    </section>
   );
}

export default SearchForm;