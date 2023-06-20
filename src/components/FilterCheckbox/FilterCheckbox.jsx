import './FilterCheckbox.css';

function FilterCheckbox({ handleChange }) {
  return ( 
    <div className='filter-checkbox filter-checkbox_size_l filter-checkbox_size_s'>
      <input 
        className='filter-checkbox__input' 
        type='checkbox' 
        id='shortmovies'
        onChange={handleChange} 
        title='Короткометражки'
        name='shortmovies'
      />
      <label className='filter-checkbox__label' htmlFor='shortmovies'></label>
      <span className='filter-checkbox__text'>Короткометражки</span>
    </div>
   );
}

export default FilterCheckbox;