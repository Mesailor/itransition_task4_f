import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "./context/AppContext";

function RequireAuth({ children }) {
  const { auth } = useContext(AppContext);
  const isAuth = auth;

  if (!isAuth) {
    return <Navigate to="/auth" />;
  }

  return children;
}

export default RequireAuth;
