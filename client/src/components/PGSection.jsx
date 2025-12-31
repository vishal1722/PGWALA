import PGListCard from "./PGListCard";
import pgList from "../data/pgList";

export default function PGSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center">
          Available PGs in <span className="text-blue-600">Pune</span>
        </h2>

        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {pgList.map((pg) => (
            <PGListCard key={pg.id} pg={pg} />
          ))}
        </div>
      </div>
    </section>
  );
}
