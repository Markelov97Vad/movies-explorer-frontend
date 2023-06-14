import './SignTitle.css';
import Logo from '../ui/Logo/Logo';

function SignTitle({ text }) {
  return ( 
    <div className='sign-title'>
      <Logo />
      <h1 className='sign-title__text'>{text}</h1>
    </div>
   );
}

export default SignTitle;