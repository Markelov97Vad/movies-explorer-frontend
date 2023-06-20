import './SearchForm.css';
import FilterCheckbox from '../../FilterCheckbox/FilterCheckbox';
import useFormValid from '../../../hooks/useFormValid';
import SearchButton from '../../ui/SearchButton/SearchButton';
import { useState } from 'react';

function SearchForm({ handleSubmitMoviesSearch, handleCheckboxShortmovies }) {
  const { values , handleChange, handleToggleChange } = useFormValid({});
  const [validationError, setValidationError] = useState('');

  // const handleSubmit = (evt) => {
  //   evt.preventDefault();
  // };
  // валидация ввода
  const handleInputValidate = () => {
    // setValidationError('')
    const isValid = values.keyword && values.keyword.length > 0;

    if(!isValid) {
      setValidationError('Ввидите ключивое слово');
    }
    return isValid;
  }

  const onSubmit = (evt) => {
    evt.preventDefault();
    const isValid = handleInputValidate();
     if (isValid) {
      handleSubmitMoviesSearch(values);
      console.log('сабмитПоиска', values);
     }
  }
  // состояние чекбокса
  const handleCheckbox = (evt) => {
    handleToggleChange(evt);
    const { name, checked } = evt.target;
    console.log('check');
    console.log(checked);
    console.log(name);
    handleCheckboxShortmovies(checked);
  }

  return ( 
    <section className='search-form'>
      <form className='search-form__form' onSubmit={onSubmit} noValidate>
          <div className='search-form__input-container'>
            <input value={values.keyword || ''} onChange={handleChange} className='search-form__input' name='keyword' type="text" placeholder='Фильм' required/>
            <SearchButton />
          </div>
          <FilterCheckbox handleChange={handleCheckbox}/>
      </form>
    </section>
   );
}

export default SearchForm;