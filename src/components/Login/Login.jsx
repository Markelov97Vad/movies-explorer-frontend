import './Login.css'
import SignTitle from '../SignTitle/SignTitle';
import SignForm from '../SignForm/SignForm';
import SignWrapper from '../SignWrapper/SignWrapper';
import useFormStateAndValid from '../../hooks/useFormValid';

function Login() {
  const { values } = useFormStateAndValid({});
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const { email, password } = values;

    if(!email || !password) {
      return
    };
    
  }

  return ( 
    <SignWrapper>
      <SignTitle text='Рады видеть!'/>
      <SignForm onSubmit={handleSubmit} />
    </SignWrapper>
   );
}

export default Login;