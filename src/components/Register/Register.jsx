import SignForm from "../SignForm/SignForm";
import SignTitle from "../SignTitle/SignTitle";
import SignWrapper from "../Sign/Sign";

function Register({ onRegistration , message, isLoading}) {
  const handleSubmit = (values) => {
    const { name, email, password } = values
    onRegistration({ name, email, password })
    console.log(values);
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
