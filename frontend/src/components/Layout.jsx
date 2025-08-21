import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Layout({ children }) {
  const { user, tokens, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <Link to="/" className="font-bold text-xl">SecureFlow</Link>
        <nav className="flex gap-4 items-center">
          <Link to="/guest" className="hover:underline">Guest</Link>
          {tokens.accessToken ? (
            <>
              <Link to="/dashboard" className="hover:underline">Dashboard</Link>
              <button
                className="bg-red-600 text-white px-4 py-1 rounded-lg"
                onClick={() => {
                  logout();
                  navigate("/login");
                }}
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="bg-blue-600 text-white px-4 py-1 rounded-lg">Login</Link>
          )}
        </nav>
      </header>
      <main className="flex-1 p-6">{children}</main>
      <footer className="bg-gray-100 text-center p-4 text-sm text-gray-600">
        Week 1 Flow · Login → Dashboard · Guest mode
      </footer>
    </div>
  );
}