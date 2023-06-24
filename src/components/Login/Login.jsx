import SignTitle from "../SignTitle/SignTitle";
import SignForm from "../SignForm/SignForm";
import SignWrapper from "../Sign/Sign";

function Login({onLogin, message, isLoading}) {
  const handleSubmit = (values) => {
    onLogin(values);
  };

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
