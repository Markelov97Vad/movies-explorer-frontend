import { Link, useLocation } from 'react-router-dom';
import logo from '../../images/logo.svg'
import './Header.css'
import NavSign from '../navigation/NavSign/NavSign';
import NavMain from '../navigation/NavMain/NavMain';
import { useContext } from 'react';
import { LoggetContext } from '../contexts/loggetContext';

function Header () {
  const { pathname } = useLocation();
  const isLoggetIn = useContext(LoggetContext)

  return (
    <header className={`header ${pathname === '/' ? 'header_type_landing' : 'header_type_main'}`}>
      <Link to='/'><img src={logo} alt="логотип Movie explorer" className="header__logo"/></Link>
      { !isLoggetIn ? <NavSign /> :
      <NavMain /> }
    </header>
  )
}

export default Header;
