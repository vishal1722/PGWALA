import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/AuthContext";
import { GraduationCap, ShieldCheck } from "lucide-react";

export default function StudentLogin() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Dummy login (replace with API later)
    login("student", { name: "Student User" });
    navigate("/student/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-blue-50 px-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <GraduationCap className="text-blue-600" size={28} />
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Student Login
            </h1>
            <p className="text-sm text-gray-500">
              Find safe & verified PGs
            </p>
          </div>
        </div>

        {/* Trust line */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
          <ShieldCheck size={16} className="text-green-600" />
          Secure login • No spam
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email address"
            className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Login as Student
          </button>
        </form>

        {/* Footer */}
        <p className="text-sm text-gray-600 text-center mt-6">
          Don’t have an account?{" "}
          <Link
            to="/student/register"
            className="text-blue-600 font-medium hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
