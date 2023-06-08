import './Login.css'
import SignTitle from '../SignTitle/SignTitle';
import SignForm from '../SignForm/SignForm';
import SignWrapper from '../Sigh/Sign';

function Login({ onLogin }) {
  const handleSubmit = (values) => {
    onLogin(values);
    console.log(values);
  }

  return ( 
    <SignWrapper>
      <SignTitle text='Рады видеть!'/>
      <SignForm handleSubmit={handleSubmit}/>
    </SignWrapper>
   );
}

export default Login;