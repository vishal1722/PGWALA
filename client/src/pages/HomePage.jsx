import { motion } from "framer-motion";
import { Search, MapPin, Home, ShieldCheck } from "lucide-react";
import Navbar from "../components/Navbar/Navbar";


export default function HomePage() {
   
    
  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-24 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Find Your Perfect <span className="text-blue-600">PG / Hostel</span>
          </h1>
          <p className="mt-4 text-gray-600 max-w-lg">
            Verified PGs, real-time seat availability, and easy pre-booking —
            all in one place.
          </p>

          {/* Search Bar */}
          <div className="mt-6 flex items-center bg-white shadow-md rounded-xl p-2 gap-2">
            <Search className="text-gray-400" />
            <input
              type="text"
              placeholder="Search by city or area"
              className="flex-1 outline-none"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
              Search
            </button>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
          alt="PG Room"
          className="rounded-2xl shadow-xl"
        />
      </section>

      {/* Features Section */}
      <section className="mt-24 bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">
          {[{
            icon: <MapPin className="mx-auto text-blue-600" size={32} />,
            title: "Location Based",
            desc: "Find PGs near college or office"
          },{
            icon: <Home className="mx-auto text-blue-600" size={32} />,
            title: "Seat Availability",
            desc: "Live room & bed status"
          },{
            icon: <ShieldCheck className="mx-auto text-blue-600" size={32} />,
            title: "Verified Owners",
            desc: "Genuine and trusted PGs"
          },{
            icon: <Search className="mx-auto text-blue-600" size={32} />,
            title: "Easy Booking",
            desc: "₹1000 pre-booking to confirm"
          }].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="p-6 rounded-2xl shadow hover:shadow-lg"
            >
              {item.icon}
              <h3 className="mt-4 font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call To Action */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 text-center"
      >
        <h2 className="text-3xl font-bold">Are You a PG Owner?</h2>
        <p className="text-gray-600 mt-3">
          Add your PG, manage students, payments & complaints digitally
        </p>
        <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl">
          Add Your PG
        </button>
      </motion.section>
    </div>
     </>
  );
}
