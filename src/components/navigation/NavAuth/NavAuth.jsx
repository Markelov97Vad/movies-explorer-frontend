import { Link } from 'react-router-dom';
import './NavAuth.css'

function NavAuth() {
  return ( 
    <nav className="navigation-auth">
      <ul className='navigation-auth__list'>
        <li>
          <Link to='/signup' className="navigation-auth__link">Регистрация</Link>
        </li>
        <li>
         <Link to='/signin'>
            <button className="navigation-auth__button">Войти</button>
          </Link>
        </li>
      </ul>
    </nav>
   );
}

export default NavAuth;