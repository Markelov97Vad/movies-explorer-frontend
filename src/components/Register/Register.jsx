import SignForm from "../SignForm/SignForm";
import SignTitle from "../SignTitle/SignTitle";
import SignWrapper from "../Sign/Sign";

function Register() {
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <SignWrapper>
      <SignTitle text="Добро пожаловать!" />
      <SignForm handleSubmit={handleSubmit} nameForm='signup'/>
    </SignWrapper>
  );
}

export default Register;
