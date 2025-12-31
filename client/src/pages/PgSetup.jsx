import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function PgSetup() {
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const finishSetup = () => {
    setUser({ isAuth: true, onboardingStep: "DONE" });
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow w-[500px]">
        <h2 className="text-xl font-bold mb-6">PG Details</h2>

        <input className="input" placeholder="PG Name" />
        <input className="input" placeholder="Total Rooms" />
        <input className="input" placeholder="Rent per Bed" />

        <button onClick={finishSetup} className="btn w-full mt-4">
          Finish & Open Dashboard
        </button>
      </div>
    </div>
  );
}
