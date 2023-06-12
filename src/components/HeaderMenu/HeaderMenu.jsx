import './HeaderMenu.css'
import NavMenu from "../navigation/NavMenu/NavMenu";
import ButtonCross from "../ui/ButtonCross/ButtonCross";
import NavigationLinkProfile from '../ui/NavigationLinkProfile/NavigationLinkProfile';

function HeaderMenu({ handleMenuOpen, isMenuOpen }) {
  return ( 
    <div className={`header-menu ${isMenuOpen && 'header-menu_opened'}`}>
      <div className="header-menu__wrapper">
          <ButtonCross place='menu' onClick={handleMenuOpen}/>
        <div className='header-menu__container'>
          <NavMenu />
          <NavigationLinkProfile />
        </div>
      </div>
    </div>
   );
}

export default HeaderMenu;