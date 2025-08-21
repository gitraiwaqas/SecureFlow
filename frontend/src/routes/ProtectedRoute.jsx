import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { tokens } = useAuth();
  const location = useLocation();
  if (!tokens?.accessToken) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
}