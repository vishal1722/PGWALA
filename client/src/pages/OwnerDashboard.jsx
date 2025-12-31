import Sidebar from "../components/owner/Sidebar";
import Topbar from "../components/owner/Topbar";
import DashboardCards from "../components/owner/DashboardCards";

export default function OwnerDashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1">
        <Topbar />
        <div className="p-6">
          <DashboardCards />
        </div>
      </div>
    </div>
  );
}
