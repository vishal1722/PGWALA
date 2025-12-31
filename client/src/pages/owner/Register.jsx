import { Link, useNavigate } from "react-router-dom";
import { Building2, ShieldCheck } from "lucide-react";
import { useAuth } from "../../auth/AuthContext";

export default function OwnerRegister() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    // Dummy register → auto login
    login("owner", { name: "New Owner" });
    navigate("/owner/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <Building2 size={28} className="text-blue-600" />
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Register as PG Owner
            </h1>
            <p className="text-sm text-gray-500">
              List your PG & get student leads
            </p>
          </div>
        </div>

        {/* Trust line */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
          <ShieldCheck size={16} className="text-green-600" />
          Business-secure & verified onboarding
        </div>

        {/* Form */}
        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type="text"
            placeholder="Owner full name"
            className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            placeholder="Business email"
            className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="tel"
            placeholder="Mobile number"
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
            Register as Owner
          </button>
        </form>

        {/* Footer */}
        <p className="text-sm text-gray-600 text-center mt-6">
          Already registered?{" "}
          <Link
            to="/owner/login"
            className="text-blue-600 font-medium hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
