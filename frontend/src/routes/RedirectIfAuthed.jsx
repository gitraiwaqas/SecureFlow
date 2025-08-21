import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function RedirectIfAuthed({ children }) {
  const { tokens } = useAuth();
  if (tokens?.accessToken) {
    return <Navigate to="/dashboard" replace />;
  }
  return children;
}