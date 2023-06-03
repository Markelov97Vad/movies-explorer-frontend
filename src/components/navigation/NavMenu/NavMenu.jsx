import NavigationButton from '../NavigationButton/NavigationButton';
import NavigationLink from '../NavigationLink/NavigationLink';
import './NavMenu.css';

function NavMenu({ handleMenuOpen }) {
  return ( 
    <nav className='navigation-menu'>
      <button className='navigation-menu__close-button' onClick={handleMenuOpen}></button>
      <ul className='navigation-menu__list'>
        <li>
          <NavigationLink place='menu' text='Главная'/>
        </li>
        <li>
          <NavigationLink place='menu' text='Фильмы'/>
        </li>
        <li>
          <NavigationLink place='menu' text='Сохраненные фильмы'/>
        </li>
      </ul>
      <NavigationButton place='menu'/>
    </nav>
  );
}

export default NavMenu;