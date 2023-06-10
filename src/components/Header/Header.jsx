import { useLocation } from 'react-router-dom';
import './Header.css'
import NavSign from '../navigation/NavSign/NavSign';
import NavMain from '../navigation/NavMain/NavMain';
import { useContext } from 'react';
import { LoggetContext } from '../contexts/loggetContext';
import Logo from '../ui/Logo/Logo';

function Header () {
  const { pathname } = useLocation();
  const isLoggetIn = useContext(LoggetContext)

  return (
    <header className={`header ${pathname === '/' ? 'header_type_landing' : 'header_type_main'}`}>
      <Logo />
      { isLoggetIn ? <NavSign /> :
      <NavMain /> }
    </header>
  )
}

export default Header;
