import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Home() {
  const { tokens } = useAuth();
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Welcome</h1>
      <p>Go to <b>Login</b>, <b>Guest</b>, or <b>Dashboard</b>.</p>
      <div className="flex gap-3">
        <Link className="px-4 py-2 bg-gray-200 rounded-lg" to="/guest">Guest</Link>
        {!tokens.accessToken && (
          <Link className="px-4 py-2 bg-blue-600 text-white rounded-lg" to="/login">Login</Link>
        )}
      </div>
    </div>
  );
}