import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { motion } from "framer-motion"; // Optional: npm install framer-motion
import { Eye, EyeOff, CheckCircle2, ArrowRight } from "lucide-react";

export default function Register() {
  const navigate = useNavigate();
  const { setUser } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    setUser({ isAuth: true, onboardingStep: "PROFILE" });
    navigate("/onboarding/profile");
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-black/5">
      
      {/* Left Side: Aesthetic Branding/Info */}
      <div className="hidden lg:flex flex-col justify-between bg-slate-900 p-12 text-white relative overflow-hidden">
        <div className="z-10">
          <div className="flex items-center gap-2 mb-12">
            <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center font-bold text-xl">S</div>
            <span className="text-xl font-bold tracking-tight">SOLOCORE</span>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }}
            className="max-w-md"
          >
            <h1 className="text-5xl font-bold leading-tight mb-6">
              Manage your business with <span className="text-blue-400">confidence.</span>
            </h1>
            <ul className="space-y-4 text-slate-400">
              {["Real-time analytics", "Secure cloud storage", "Custom business workflows"].map((text) => (
                <li key={text} className="flex items-center gap-3">
                  <CheckCircle2 className="text-emerald-400 w-5 h-5" /> {text}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Decorative Circle */}
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl"></div>
      </div>

      {/* Right Side: The Form */}
      <div className="flex items-center justify-center p-8 lg:p-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-[400px]"
        >
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Create an account</h2>
            <p className="text-slate-500 mt-2">Join 10,000+ owners managing their teams.</p>
          </div>

          <form onSubmit={handleRegister} className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Full Name</label>
              <input 
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Email Address</label>
              <input 
                type="email"
                placeholder="you@company.com"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Password</label>
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <button 
              type="submit"
              className="group w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-xl shadow-slate-200"
            >
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-slate-100 flex items-center justify-between">
            <span className="text-sm text-slate-500">Already have an account?</span>
            <button 
              onClick={() => navigate('/login')}
              className="text-sm font-bold text-blue-600 hover:text-blue-700"
            >
              Log in
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}