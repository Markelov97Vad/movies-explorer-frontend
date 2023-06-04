import './NavHeader.css';
import NavihationLink from '../NavigationLink/NavigationLink';
import NavigationButton from '../NavigationButton/NavigationButton';

function NavHeader() {
  return ( 
    <nav className='navigation-header'>
      <ul className='navigation-header__list'>
        <li>
          <NavihationLink place='header' text='Фильмы' path='/movies'/>
        </li>
        <li>
          <NavihationLink place='header' text='Сохраненные фильмы' path='/saved-movies'/>
        </li>
      </ul>
      <NavigationButton />
    </nav>
   );
}

export default NavHeader;