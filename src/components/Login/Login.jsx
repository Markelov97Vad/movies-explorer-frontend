import SignTitle from "../SignTitle/SignTitle";
import SignForm from "../SignForm/SignForm";
import SignWrapper from "../Sign/Sign";
import { useEffect } from "react";
import useUserContext from "../../hooks/useUserContext";
import { useLocation, useNavigate } from "react-router-dom";

function Login({onLogin, message, isLoading}) {
  const { loggetIn } = useUserContext();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    onLogin(values);
  };

  useEffect(() => {
    if ( loggetIn && pathname === '/signin') {
      navigate('/movies', { replace: true })
    } else {
      navigate(pathname);
    }
  },[])

  return (
    <SignWrapper>
      <SignTitle text="Рады видеть!" />
      <SignForm 
        handleSubmit={handleSubmit} 
        nameForm='signin' 
        message={message}
        isLoading={isLoading}
      />
    </SignWrapper>
  );
}

export default Login;
