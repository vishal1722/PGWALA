import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (user.onboardingStep === "PROFILE")
      navigate("/onboarding/profile");
    else if (user.onboardingStep === "PG")
      navigate("/onboarding/pg");
    else navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow w-96">
        <h2 className="text-2xl font-bold mb-6">Login</h2>

        <input className="input" placeholder="Email" />
        <input className="input" placeholder="Password" type="password" />

        <button onClick={handleLogin} className="btn mt-4 w-full">
          Login
        </button>
      </div>
    </div>
  );
}
