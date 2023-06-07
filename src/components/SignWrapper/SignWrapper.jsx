import './SignWrapper.css'

function SignWrapper({ children }) {
  return ( 
    <div className="sign-wrapper">
      {children}
    </div>
   );
}

export default SignWrapper;