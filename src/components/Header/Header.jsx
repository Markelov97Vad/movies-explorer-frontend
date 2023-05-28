import logo from '../../images/logo.svg'
import './Header.css'

function Header () {
  return (
    <header className="header root__header">
      <img src={logo} alt="логотип Movie explorer" className="header__logo"/>
      <nav className="header__menu">
        <span className="header__link">Регистрация</span>
        <button className="header__button">Войти</button>
      </nav>
    </header>
  )
}

export default Header;
