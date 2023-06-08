import NavigationButton from '../NavigationLinkProfile/NavigationLinkProfile';
import NavigationLink from '../NavigationLink/NavigationLink';
import './NavMenu.css';

function NavMenu({ handleMenuOpen }) {
  return ( 
    <nav className='navigation-menu'>
      <button className='navigation-menu__close-button' onClick={handleMenuOpen}></button>
      <ul className='navigation-menu__list'>
        <li>
          <NavigationLink place='menu' text='Главная' path='/'/>
        </li>
        <li>
          <NavigationLink place='menu' text='Фильмы' path='/movies'/>
        </li>
        <li>
          <NavigationLink place='menu' text='Сохраненные фильмы' path='/saved-movies'/>
        </li>
      </ul>
      <NavigationButton place='menu'/>
    </nav>
  );
}

export default NavMenu;