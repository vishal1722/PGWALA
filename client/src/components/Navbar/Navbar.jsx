import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { name: "Home", role: "general" },
  { name: "For Students", role: "student" },
  { name: "For Owners", role: "owner" },
  { name: "Contact", role: "general" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur shadow-sm z-50"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-blue-600 cursor-pointer">
          PG Finder
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => setActive(item.name)}
              className="relative text-gray-700 font-medium"
            >
              {item.name}
              {active === item.name && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 -bottom-1 h-[2px] w-full bg-blue-600"
                />
              )}
            </button>
          ))}

          <button className="ml-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Login
          </button>
        </div>

        {/* Mobile Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          className="md:hidden bg-white px-6 pb-4"
        >
          <div className="flex flex-col gap-4 mt-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  setActive(item.name);
                  setOpen(false);
                }}
                className={`text-left ${
                  active === item.name
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700"
                }`}
              >
                {item.name}
              </button>
            ))}

            <button className="mt-2 bg-blue-600 text-white py-2 rounded-lg">
              Login
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
