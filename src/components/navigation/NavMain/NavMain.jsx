import { Link } from 'react-router-dom';
import './NavMain.css'
import { useState } from 'react';

function NavMain() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  return ( 
    // <nav className='navigation-main'>
    //   <ul className='navigation-main__list'>
    //     <li>
    //       <Link className='navigation-main__link navigation-main__link_type_bold' to='/movies'>Фильмы</Link>
    //     </li>
    //     <li>
    //       <Link className='navigation-main__link navigation-main__link_type_normal' to='/saved-movies'>Сохранённые фильмы</Link>
    //     </li>
    //   </ul>
    //   <button className='navigation-main__button' type='button'>Аккаунт</button>
    // </nav>
    <div className='navigation-main__wrapper'>
      <button type='button' className='navigation-main__button-burger'></button>
      <div className='navigation-main__menu navigation-main__menu_opened'>
        <nav className='navigation-main__container'>
          <button className='navigation-main__close-button'></button>
          <ul className='nav__list'>
            <li>
              <Link className='navigation-main__link navigation-main__link_type_menu' to='/'>Главная</Link>
            </li>
            <li>
              <Link className='navigation-main__link navigation-main__link_type_bold navigation-main__link_type_menu type_menu' to='/movies'>Фильмы</Link>
            </li>
            <li>
              <Link className='navigation-main__link navigation-main__link_type_normal navigation-main__link_type_menu type_menu' to='/saved-movies'>Сохранённые фильмы</Link>
            </li>
          </ul>
          <button className='navigation-main__button' type='button'>Аккаунт</button>
        </nav>
      </div>
    </div>
    
   );
}

export default NavMain;