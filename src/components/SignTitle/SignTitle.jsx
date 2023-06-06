import './SignTitle.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function SignTitle() {
  return ( 
    <div className='sign-title'>
      <Link to='/'><img src={logo} alt="логотип Movie explorer" className="header__logo"/></Link>
      <h3 className='sign-title__text'>Добро пожаловать!</h3>
    </div>
   );
}

export default SignTitle;