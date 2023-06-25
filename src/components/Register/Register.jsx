import SignForm from "../SignForm/SignForm";
import SignTitle from "../SignTitle/SignTitle";
import SignWrapper from "../Sign/Sign";
import { useEffect } from "react";
import useUserContext from "../../hooks/useUserContext";
import { useLocation, useNavigate } from "react-router-dom";

function Register({ onRegistration , message, isLoading}) {
  const { loggetIn } = useUserContext();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if ( loggetIn && pathname === '/signup') {
      navigate('/movies', { replace: true })
    } else {
      navigate(pathname);
    }
  },[])

  const handleSubmit = (values) => {
    onRegistration(values)
  };
  return (
    <SignWrapper>
      <SignTitle text="Добро пожаловать!" />
      <SignForm 
        handleSubmit={handleSubmit} 
        nameForm='signup' 
        message={message}
        isLoading={isLoading}
      />
    </SignWrapper>
  );
}

export default Register;
