import { useEffect, useState } from 'react';
import './SearchForm.css';
// import iconSearch from '../../../images/icon-search.svg'
// console.log(window.screen.width);
// console.log(window.innerWidth);
// const screenSize = window.innerWidth


function SearchForm() {
  // const [isSmallScreenSize, setIsSmallScreenSize ] = useState(false)

  // useEffect(() => {
  //   window.screen.width <= 720 ?  setIsSmallScreenSize(true) : setIsSmallScreenSize(false)
  // },[window.screen.width]);

  // function detectWindowSize() {
  //   window.innerWidth <= 720 ? setIsSmallScreenSize(true) : setIsSmallScreenSize(false)
  // }

  // window.onresize = detectWindowSize();
  // console.log(window.onresize = detectWindowSize());

  return ( 
    <section className='search-form'>
      <form className='search-form__form'>
          {/* <fieldset className='search-form__input-container'> */}
            <input className='search-form__input' type="text" placeholder='Фильмы'/>
            <button className='search-form__button'></button>
          {/* </fieldset> */}
          <div className='filter-checkbox '>
            <input className='filter-checkbox__input' type="checkbox" id='check'/>
            <label className='filter-checkbox__label' htmlFor="check"></label>
            <span className='filter-checkbox__text'>Короткометражки</span>
          </div>
      </form>
    </section>
   );
}

export default SearchForm;