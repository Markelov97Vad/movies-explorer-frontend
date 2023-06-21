import SignTitle from "../SignTitle/SignTitle";
import SignForm from "../SignForm/SignForm";
import SignWrapper from "../Sign/Sign";
import mainApi from "../../utils/MainApi";
import useUserContext from "../../hooks/useUserContext";
import { useNavigate } from "react-router-dom";

function Login({onLogin}) {
  // const { loggetIn, setUserLoggetIn } = useUserContext();
  // const navigate = useNavigate();
  // const handleAuthorize = (email, password) => {
  //   return mainApi.authorize(email, password)
  //   .then((res) => {
  //     setUserLoggetIn(res)
  //     navigate("/movies", { replace: true });
  //   });
  // };

  const handleSubmit = (values) => {
    onLogin(values);
    console.log(values);
  };

  return (
    <SignWrapper>
      <SignTitle text="Рады видеть!" />
      <SignForm handleSubmit={handleSubmit} nameForm='signin'/>
    </SignWrapper>
  );
}

export default Login;
