import './NavMain.css';
import { useState } from 'react';
import NavHeader from '../NavHeader/NavHeader';
import NavMenu from '../NavMenu/NavMenu';

function NavMain() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const handleMenuOpen = () => setIsSideBarOpen(!isSideBarOpen);

  return (
    <>
     <NavHeader />
    <div className='navigation-main__wrapper'>
      <button type='button' className='navigation-main__button-burger' onClick={handleMenuOpen}></button>
      <div className={`navigation-main__menu ${isSideBarOpen && 'navigation-main__menu_opened'}`}>
        <NavMenu handleMenuOpen={handleMenuOpen} />
      </div>
    </div>
   </>);
}

export default NavMain;