import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/AuthContext";
import { Building2, ShieldCheck } from "lucide-react";

export default function OwnerLogin() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Dummy login (replace with API later)
    login("owner", { name: "Owner User" });
    navigate("/owner/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <Building2 className="text-blue-600" size={28} />
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Owner Login
            </h1>
            <p className="text-sm text-gray-500">
              Manage PGs & student enquiries
            </p>
          </div>
        </div>

        {/* Trust line */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
          <ShieldCheck size={16} className="text-green-600" />
          Business-secure access
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Business email"
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
            Login as Owner
          </button>
        </form>

        {/* Footer */}
        <p className="text-sm text-gray-600 text-center mt-6">
          New PG owner?{" "}
          <Link
            to="/owner/register"
            className="text-blue-600 font-medium hover:underline"
          >
            Register your PG
          </Link>
        </p>
      </div>
    </div>
  );
}
