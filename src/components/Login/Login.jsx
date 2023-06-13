import SignTitle from "../SignTitle/SignTitle";
import SignForm from "../SignForm/SignForm";
import SignWrapper from "../Sign/Sign";

function Login({ onLogin }) {
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
