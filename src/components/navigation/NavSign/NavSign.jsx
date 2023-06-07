import './NavSign.css'
import NavLinkSign from '../../ui/NavLinkSign/NavLinkSign';

function NavSign() {
  return ( 
    <nav className="navigation-sign">
      <ul className='navigation-sign__list'>
        <li>
          <NavLinkSign 
            text='Регистрация' 
            place='header' 
            type='link' 
            to='/signup' 
            color='black'
          />
        </li>
        <li>
          <NavLinkSign 
            text='Войти' 
            place='header' 
            type='button' 
            to='/signin' 
            color='white'
          />
        </li>
      </ul>
    </nav>
   );
}

export default NavSign;