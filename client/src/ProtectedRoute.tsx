// import { Navigate } from "react-router-dom"
import { useAuth } from "./AuthProvider";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const user = useAuth();

  if (!user) {
    // return <Navigate to="/login" replace />
    return <h1>You need to log in to access this page!</h1>;
  }

  return children;
};

export default ProtectedRoute;
