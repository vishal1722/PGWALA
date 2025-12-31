import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { ShieldCheck } from "lucide-react";

export default function StudentLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white to-blue-50">
      {/* Navbar */}
      <Navbar role="student" />

      {/* Trust Banner */}
      <div className="pt-20 px-6">
        <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-sm border border-blue-100 p-5 flex items-center gap-3">
          <ShieldCheck className="text-blue-600" size={22} />
          <p className="text-sm text-gray-700">
            Verified PG listings • Safe payments • Student-friendly support
          </p>
        </div>
      </div>

      {/* Page Content */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-10">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
