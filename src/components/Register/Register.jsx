import SignForm from '../SignForm/SignForm';
import SignTitle from '../SignTitle/SignTitle';
import SignWrapper from '../Sigh/Sign';
import './Register.css'

function Register() {
  return ( 
      <SignWrapper>
        <SignTitle text='Добро пожаловать!'/>
        <SignForm />
      </SignWrapper>
   );
}

export default Register;