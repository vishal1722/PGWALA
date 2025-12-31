export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 text-white min-h-screen p-6">
      <h2 className="text-2xl font-bold mb-10">PGWALA</h2>

      <ul className="space-y-4">
        <li className="hover:text-blue-400 cursor-pointer">Dashboard</li>
        <li className="hover:text-blue-400 cursor-pointer">Students</li>
        <li className="hover:text-blue-400 cursor-pointer">Rooms</li>
        <li className="hover:text-blue-400 cursor-pointer">Payments</li>
        <li className="hover:text-blue-400 cursor-pointer">Logout</li>
      </ul>
    </aside>
  );
}
