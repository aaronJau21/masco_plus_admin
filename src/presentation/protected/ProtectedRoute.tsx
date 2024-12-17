import { Navigate } from "react-router";
import { useLocation } from "react-router";
import useAuthStore from "../../application/storage/authStorage";

interface ProtectedRouteProps {
  children: React.ReactElement;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const token = useAuthStore((state) => state.token);
  const user = useAuthStore((state) => state.user);

  const isAuthenticated = Boolean(token && user);

  const location = useLocation();

  return isAuthenticated ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
