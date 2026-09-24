import ProjectCard from "./projectCard";

const Projects = () => {
  return (
    <section className="py-20 px-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Featured Projects</h2>

      {/* 1. Corrected 'grid-flow-dense' and added 'gap-6' */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProjectCard
          image="/assets/pump_room_final.jpg"
          title="Mechanical pump installation"
        />

        <ProjectCard
          image="/assets/wiring_worker_final.jpg"
          title="Electrical Systems & Wiring"
        />

        <ProjectCard
          image="/assets/fuel_dispenser_final.jpg"
          title="Fuel Dispenser Installation"
        />
        <ProjectCard
          image="/assets/gas_nozzle_final.jpg"
          title="Gas system servicing"
        />
      </div>
    </section>
  );
};

export default Projects;
