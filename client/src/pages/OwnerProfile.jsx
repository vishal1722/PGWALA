import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function OwnerProfile() {
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const handleNext = () => {
    setUser({ isAuth: true, onboardingStep: "PG" });
    navigate("/onboarding/pg");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow w-[450px]">
        <h2 className="text-xl font-bold mb-6">Owner Information</h2>

        <input className="input" placeholder="Phone" />
        <input className="input" placeholder="Address" />
        <input className="input" placeholder="City" />

        <button onClick={handleNext} className="btn w-full mt-4">
          Continue
        </button>
      </div>
    </div>
  );
}
