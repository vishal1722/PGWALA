import { PlusCircle, Home, Users, Eye } from "lucide-react";

export default function OwnerDashboard() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Owner Dashboard
          </h1>
          <p className="text-gray-600 mt-1">
            Manage your PGs and student enquiries
          </p>
        </div>

        <button className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition">
          <PlusCircle size={18} />
          Add New PG
        </button>
      </div>

      {/* Stats */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={<Home />}
          title="Total PGs"
          value="3"
        />
        <StatCard
          icon={<Users />}
          title="Active Leads"
          value="18"
        />
        <StatCard
          icon={<Eye />}
          title="Total Views"
          value="1,240"
        />
        <StatCard
          icon={<Home />}
          title="Occupied Rooms"
          value="26"
        />
      </div>

      {/* PG Management */}
      <div className="bg-white rounded-2xl shadow-sm border p-6">
        <h2 className="text-lg font-semibold text-gray-800">
          Your PG Listings
        </h2>

        <div className="mt-4 space-y-4">
          {[1, 2, 3].map((pg) => (
            <div
              key={pg}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border rounded-lg p-4 hover:bg-slate-50 transition"
            >
              <div>
                <p className="font-medium text-gray-800">
                  Shree PG for Boys
                </p>
                <p className="text-sm text-gray-500">
                  Wakad, Pune
                </p>
              </div>

              <div className="flex gap-3">
                <button className="text-sm px-4 py-2 rounded-lg border hover:bg-gray-100">
                  Edit
                </button>
                <button className="text-sm px-4 py-2 rounded-lg border hover:bg-gray-100">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* Small reusable stat card */
function StatCard({ icon, title, value }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-5 flex items-center gap-4">
      <div className="text-blue-600">{icon}</div>
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-xl font-bold text-gray-800">{value}</p>
      </div>
    </div>
  );
}
