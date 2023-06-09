import { Link } from 'react-router-dom';
import './Logo.css';
import logo from '../../../images/logo.svg'

function Logo() {
  return ( 
    <Link to='/'><img src={logo} alt="логотип Movie explorer" className="logo"/></Link>
   );
}

export default Logo;