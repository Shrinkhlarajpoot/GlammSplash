import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../context";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const {
    auth: { token },
  } = useAuth();

  return token ? (
    <Outlet/>
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export { PrivateRoute };