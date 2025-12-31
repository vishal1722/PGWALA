import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { Building2, ShieldCheck } from "lucide-react";

export default function OwnerLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Navbar */}
      <Navbar role="owner" />

      {/* Owner Info Banner */}
      <div className="pt-20 px-6">
        <div className="max-w-7xl mx-auto bg-white border border-slate-200 rounded-xl p-5 flex flex-col sm:flex-row gap-3 sm:items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
            <Building2 className="text-blue-600" size={22} />
            <div>
              <p className="font-medium text-gray-800">
                Owner Dashboard
              </p>
              <p className="text-sm text-gray-500">
                Manage your PGs, leads, and listings in one place
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <ShieldCheck size={16} className="text-green-600" />
            Secure & Verified Account
          </div>
        </div>
      </div>

      {/* Page Content */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-10">
        <Outlet />
      </main>
    </div>
  );
}
