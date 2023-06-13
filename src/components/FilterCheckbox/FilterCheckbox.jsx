import './FilterCheckbox.css';

function FilterCheckbox() {
  return ( 
    <div className='filter-checkbox filter-checkbox_size_l filter-checkbox_size_s'>
      <input className='filter-checkbox__input' type="checkbox" id='check'/>
      <label className='filter-checkbox__label' htmlFor="check"></label>
      <span className='filter-checkbox__text'>Короткометражки</span>
    </div>
   );
}

export default FilterCheckbox;