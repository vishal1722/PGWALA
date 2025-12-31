import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

/* Role-based nav configuration */
const NAV_CONFIG = {
  public: [
    { name: "Home", path: "/" },
    { name: "For Students", path: "/student/login" },
    { name: "For Owners", path: "/owner/login" },
    { name: "Contact", path: "/contact" },
  ],
  student: [
    { name: "Dashboard", path: "/student/dashboard" },
    { name: "Find PGs", path: "/student/find" },
    { name: "Saved PGs", path: "/student/saved" },
  ],
  owner: [
    { name: "Dashboard", path: "/owner/dashboard" },
    { name: "My PGs", path: "/owner/dashboard" },
    { name: "Add PG", path: "/owner/add-pg" },
  ],
};

export default function Navbar({ role }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navItems = NAV_CONFIG[role || "public"];

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-bold text-blue-600 no-underline hover:opacity-90 transition"
        >
          PG Finder
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.name}
                to={item.path}
                className={`
                  relative no-underline font-medium transition
                  px-1 py-1
                  ${
                    isActive
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                  }
                `}
              >
                {item.name}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-0 -bottom-1 h-[2px] w-full bg-blue-600 rounded"
                  />
                )}
              </Link>
            );
          })}

          {/* Auth Button */}
          {!role ? (
            <Link
              to="/student/login"
              className="ml-4 bg-blue-600 text-white no-underline px-4 py-2 rounded-lg hover:bg-blue-700 transition shadow-sm"
            >
              Login
            </Link>
          ) : (
            <button
              className="ml-4 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100 transition"
            >
              Logout
            </button>
          )}
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          className="md:hidden bg-white px-6 pb-4 shadow-sm"
        >
          <div className="flex flex-col gap-3 mt-4">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={`
                    no-underline px-3 py-2 rounded-lg transition
                    ${
                      isActive
                        ? "bg-blue-50 text-blue-600 font-semibold"
                        : "text-gray-700 hover:bg-gray-100"
                    }
                  `}
                >
                  {item.name}
                </Link>
              );
            })}

            {!role ? (
              <Link
                to="/student/login"
                onClick={() => setOpen(false)}
                className="mt-2 bg-blue-600 text-white no-underline py-2 rounded-lg text-center hover:bg-blue-700 transition"
              >
                Login
              </Link>
            ) : (
              <button className="mt-2 border py-2 rounded-lg hover:bg-gray-100 transition">
                Logout
              </button>
            )}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
