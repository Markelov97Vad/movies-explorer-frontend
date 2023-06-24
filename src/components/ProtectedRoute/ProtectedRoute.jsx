import { Navigate } from "react-router-dom";
import useUserContext from "../../hooks/useUserContext";

function ProtectedRoute({ children }) {
  const { loggetIn } = useUserContext();

  if(!loggetIn) {
    return <Navigate to='/' replace />
  }
  return children;
}

export default ProtectedRoute;