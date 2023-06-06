import './Login.css'
import SignTitle from '../SignTitle/SignTitle';
import SignForm from '../SignForm/SignForm';

function Login() {
  return ( 
    <>
      <div className='login'>
        <SignTitle />
        <SignForm />
      </div>
    </>
   );
}

export default Login;