import { Route, Navigate, redirect } from "react-router-dom";
import { LoggetContext } from "../../contexts/loggetContext";
import useUserContext from "../../hooks/useUserContext";

const ProtectedRoute = ({element: Component, ...props}) => {
  // const loggetContext = useContext(LoggetContext)
  const { loggetIn } = useUserContext();
  console.log(props.loggetIn);
  return (
    props.loggetIn ? <Component {...props} /> : <Navigate to='/signin' replace /> 
    // {loggetIn === true console.log()};
    //  <Component {...props} next={() => console.log('')}/>
    // <Route>
    //   {() =>
    //     loggetIn ? <Component {...props} /> : <redirect to='/' />
    //   }
    // </Route>
  );
}

export default ProtectedRoute;