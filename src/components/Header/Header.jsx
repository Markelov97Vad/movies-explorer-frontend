import { Link, useLocation } from 'react-router-dom';
import logo from '../../images/logo.svg'
import './Header.css'
import NavAuth from '../navigation/NavAuth/NavAuth';
import NavMain from '../navigation/NavMain/NavMain';

function Header ({ children }) {
  const { pathname } = useLocation();

  return (
    <header className={`header ${pathname === '/' ? 'header_type_landing' : 'header_type_main'}`}>
      <Link to='/'><img src={logo} alt="логотип Movie explorer" className="header__logo"/></Link>
      {/* { children } */}
      {/* <NavAuth /> */}
      <NavMain />
    </header>
  )
}

export default Header;
