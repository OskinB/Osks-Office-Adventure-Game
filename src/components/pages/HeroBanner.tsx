import { information } from "@/game/data/information";

const HeroBanner = () => {
  return (
    <div className="relative overflow-hidden rounded-lg border-2 border-primary/50">
      <img
        src={information.company.imageBuilding}
        alt={`${information.company.name} Office Building`}
        className="w-full h-64 object-cover opacity-80"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e] via-[#1a1a2e]/50 to-transparent flex items-end">
        <div className="p-4 md:p-8 w-full">
          <h1 className="text-3xl md:text-5xl font-bold text-secondary mb-2">
            Ósk's Playable Application
          </h1>
          <p className="text-xl md:text-2xl text-neutral-50">
            A top-down office adventure
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
