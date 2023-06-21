import { Navigate} from "react-router-dom";
import useUserContext from "../../hooks/useUserContext";
// import { useEffect, useState } from "react";
// import mainApi from "../../utils/MainApi";

function ProtectedRoute({children , ...rest}) {
  const { loggetIn } = useUserContext();
  // const location = useLocation();
  // console.log("ProtectedRoute",loggetIn);

  if(!loggetIn) {
    // return <Navigate to='/' state={{ previousPath: location.pathname }} />
    return <Navigate to='/' replace />
  }
  return children;
}

export default ProtectedRoute;