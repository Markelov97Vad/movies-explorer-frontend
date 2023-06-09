import './SignTitle.css';
import Logo from '../ui/Logo/Logo';

function SignTitle({ text }) {
  return ( 
    <div className='sign-title'>
      <Logo />
      <h3 className='sign-title__text'>{text}</h3>
    </div>
   );
}

export default SignTitle;