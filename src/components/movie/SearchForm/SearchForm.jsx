import './SearchForm.css';
import FilterCheckbox from '../../FilterCheckbox/FilterCheckbox';
import useFormValid from '../../../hooks/useFormValid';
import SearchButton from '../../ui/SearchButton/SearchButton';
import { useEffect, useState } from 'react';
import useResultCache from '../../../hooks/useResultCache';
import ErrorMessage from '../../ErrorMessage/ErrorMessage';

function SearchForm({ handleSubmitMoviesSearch, handleCheckboxShortmovies, valueCache = false }) {
  const [validationError, setValidationError] = useState('');
  const [visible, setVisible] = useState(false)
  const { values , handleChange, handleToggleChange, resetFormValues } = useFormValid({});
  const { setResultCache, getResultCache } = useResultCache();

  // const handleSubmit = (evt) => {
  //   evt.preventDefault();
  // };
  // валидация ввода
  const handleValuesCache = (inputValuse) => {
    if(valueCache) {
      setResultCache('searchValueCache', inputValuse)
    }
  }

  useEffect(() => {
    if(valueCache) {
      const cache = getResultCache('searchValueCache');
      cache && resetFormValues(cache);
    }
  }, [valueCache, getResultCache, resetFormValues])

  const handleInputValidate = () => {
    setValidationError('')
    const isValid = values.keyword && values.keyword.length > 0;

    if(!isValid) {
      setValidationError('Нужно ввести ключевое слово');
      setVisible(true)
    }
    return isValid;
  }

  const onSubmit = (evt) => {
    evt.preventDefault();
    const isValid = handleInputValidate();
     if (isValid) {
      handleSubmitMoviesSearch(values);
      handleValuesCache(values)
      setVisible(false)
      console.log('САБМИТ ПОИСКА', values);
     }
  }
  // состояние чекбокса
  const handleCheckbox = (evt) => {
    handleToggleChange(evt);
    const { name, checked } = evt.target;
    // console.log('check');
    console.log(checked);
    // console.log(name);
    handleCheckboxShortmovies(checked);
    handleValuesCache({ [name] : checked});
  }

  return ( 
    <section className='search-form'>
      {visible && <ErrorMessage text={validationError} place='search-form'/>}
      <form className='search-form__form' onSubmit={onSubmit} noValidate>
          <div className='search-form__input-container'>
            <input value={values.keyword || ''} onChange={handleChange} className='search-form__input' name='keyword' type="text" placeholder='Фильм' required/>
            <SearchButton />
          </div>
          <FilterCheckbox 
            handleChange={handleCheckbox} 
            checked={values.shortmovies}
          />
      </form>
    </section>
   );
}

export default SearchForm;