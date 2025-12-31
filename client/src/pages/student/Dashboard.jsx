import { Heart, Search, MapPin, ShieldCheck } from "lucide-react";
import PGSection from "../../components/PGSection";

export default function StudentDashboard() {
  return (
    <div className="space-y-10">
      {/* Welcome Section */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-100">
        <h1 className="text-2xl font-bold text-gray-800">
          Welcome back 👋
        </h1>
        <p className="text-gray-600 mt-1">
          Find verified PGs near your college or workplace
        </p>

        {/* Search Bar */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <div className="flex items-center gap-2 bg-slate-50 border rounded-lg px-4 py-3 flex-1">
            <Search size={18} className="text-gray-500" />
            <input
              placeholder="Search by area, college, landmark..."
              className="bg-transparent outline-none w-full text-sm"
            />
          </div>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Search
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-5 shadow-sm flex items-center gap-4">
          <ShieldCheck className="text-green-600" />
          <div>
            <p className="font-semibold">Verified PGs</p>
            <p className="text-sm text-gray-500">
              All listings are manually checked
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-sm flex items-center gap-4">
          <Heart className="text-pink-500" />
          <div>
            <p className="font-semibold">Saved PGs</p>
            <p className="text-sm text-gray-500">
              Compare your shortlisted options
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-sm flex items-center gap-4">
          <MapPin className="text-blue-600" />
          <div>
            <p className="font-semibold">Nearby Locations</p>
            <p className="text-sm text-gray-500">
              PGs close to your daily travel
            </p>
          </div>
        </div>
      </div>

      {/* PG Listings */}
      <PGSection />
    </div>
  );
}
