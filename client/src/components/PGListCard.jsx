import { motion } from "framer-motion";
import { MapPin, Wifi, Utensils } from "lucide-react";

export default function PGListCard({ pg }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
    >
      <img
        src={pg.image}
        alt={pg.name}
        className="h-44 w-full object-cover"
      />

      <div className="p-5">
        <h3 className="font-semibold text-lg">{pg.name}</h3>

        <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
          <MapPin size={14} /> {pg.area}
        </p>

        <div className="mt-3 text-sm text-gray-600 space-y-1">
          <p className="flex items-center gap-1">
            <Utensils size={14} /> Food: {pg.food}
          </p>
          <p className="flex items-center gap-1">
            <Wifi size={14} /> WiFi: {pg.wifi}
          </p>
        </div>

        <p className="mt-3 text-blue-600 font-semibold">{pg.rent}</p>

        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg">
          View Details
        </button>
      </div>
    </motion.div>
  );
}
